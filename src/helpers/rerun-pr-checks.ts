/*
Copyright 2021 Expedia, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as core from '@actions/core';
import { GithubError } from '../types';
import { context } from '@actions/github';
import { map } from 'bluebird';
import { octokit } from '../octokit';
import { request } from '@octokit/request';

export const rerunPrChecks = async () => {
  /** grab owner in case of fork branch */
  const {
    data: {
      head: {
        user: { login: owner },
        sha: latestHash,
        ref: branch
      }
    }
  } = await octokit.pulls.get({
    pull_number: context.issue.number,
    ...context.repo
  });
  const workflowRunResponses = await map(['pull_request', 'pull_request_target'], event =>
    octokit.actions.listWorkflowRunsForRepo({
      branch,
      ...context.repo,
      owner,
      event,
      per_page: 100,
      status: 'completed'
    })
  );
  const workflowRuns = workflowRunResponses.map(response => response.data.workflow_runs).flat();
  if (!workflowRuns.length) {
    core.info(`No workflow runs found on branch ${branch} on ${owner}/${context.repo.repo}`);
    return;
  }
  const latestWorkflowRuns = workflowRuns.filter(({ head_sha }) => head_sha === latestHash);
  core.info(`There are ${latestWorkflowRuns.length} checks associated with the latest commit, triggering reruns...`);

  return map(latestWorkflowRuns, async ({ id, name, rerun_url }) => {
    core.info(`- Rerunning ${name} (${id})`);
    await request(`POST ${rerun_url}`, {
      headers: {
        authorization: `token ${core.getInput('github_token')}`
      }
    }).catch(error => {
      if (error.status === 403) {
        core.info(`${name} is already running.`);
      } else {
        core.setFailed((error as GithubError).message);
      }
    });
  });
};
