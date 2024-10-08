export const id = 431;
export const ids = [431,461];
export const modules = {

/***/ 9042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$9": () => (/* binding */ DEFAULT_PIPELINE_STATUS),
/* harmony export */   "Ak": () => (/* binding */ READY_FOR_MERGE_PR_LABEL),
/* harmony export */   "Cb": () => (/* binding */ MERGE_QUEUE_STATUS),
/* harmony export */   "Cc": () => (/* binding */ GITHUB_OPTIONS),
/* harmony export */   "Ee": () => (/* binding */ QUEUED_FOR_MERGE_PREFIX),
/* harmony export */   "HW": () => (/* binding */ DEFAULT_PR_TITLE_REGEX),
/* harmony export */   "Hc": () => (/* binding */ PRODUCTION_ENVIRONMENT),
/* harmony export */   "IH": () => (/* binding */ FIRST_QUEUED_PR_LABEL),
/* harmony export */   "K5": () => (/* binding */ SECONDS_IN_A_DAY),
/* harmony export */   "Km": () => (/* binding */ DEFAULT_PIPELINE_DESCRIPTION),
/* harmony export */   "Xt": () => (/* binding */ PEER_APPROVED_PR_LABEL),
/* harmony export */   "_d": () => (/* binding */ CORE_APPROVED_PR_LABEL),
/* harmony export */   "aT": () => (/* binding */ ALMOST_OVERDUE_ISSUE),
/* harmony export */   "fy": () => (/* binding */ LATE_REVIEW),
/* harmony export */   "gd": () => (/* binding */ PRIORITY_TO_DAYS_MAP),
/* harmony export */   "nJ": () => (/* binding */ JUMP_THE_QUEUE_PR_LABEL),
/* harmony export */   "rF": () => (/* binding */ PRIORITY_LABELS),
/* harmony export */   "wH": () => (/* binding */ OVERDUE_ISSUE)
/* harmony export */ });
/* unused harmony exports DEFAULT_EXEMPT_DESCRIPTION, PRIORITY_1, PRIORITY_2, PRIORITY_3, PRIORITY_4, COPYRIGHT_HEADER */
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
// These extra headers are for experimental API features on Github Enterprise. See https://docs.github.com/en/enterprise-server@3.0/rest/overview/api-previews for details.
const PREVIEWS = ['ant-man', 'flash', 'groot', 'inertia', 'starfox'];
const GITHUB_OPTIONS = {
    headers: {
        accept: PREVIEWS.map(preview => `application/vnd.github.${preview}-preview+json`).join()
    }
};
const SECONDS_IN_A_DAY = 86400000;
const DEFAULT_EXEMPT_DESCRIPTION = 'Passed in case the check is exempt.';
const DEFAULT_PIPELINE_STATUS = 'Pipeline Status';
const DEFAULT_PIPELINE_DESCRIPTION = 'Pipeline clear.';
const PRODUCTION_ENVIRONMENT = 'production';
const LATE_REVIEW = 'Late Review';
const OVERDUE_ISSUE = 'Overdue';
const ALMOST_OVERDUE_ISSUE = 'Due Soon';
const PRIORITY_1 = 'Priority: Critical';
const PRIORITY_2 = 'Priority: High';
const PRIORITY_3 = 'Priority: Medium';
const PRIORITY_4 = 'Priority: Low';
const PRIORITY_LABELS = [PRIORITY_1, PRIORITY_2, PRIORITY_3, PRIORITY_4];
const PRIORITY_TO_DAYS_MAP = {
    [PRIORITY_1]: 2,
    [PRIORITY_2]: 14,
    [PRIORITY_3]: 45,
    [PRIORITY_4]: 90
};
const CORE_APPROVED_PR_LABEL = 'CORE APPROVED';
const PEER_APPROVED_PR_LABEL = 'PEER APPROVED';
const READY_FOR_MERGE_PR_LABEL = 'READY FOR MERGE';
const MERGE_QUEUE_STATUS = 'QUEUE CHECKER';
const QUEUED_FOR_MERGE_PREFIX = 'QUEUED FOR MERGE';
const FIRST_QUEUED_PR_LABEL = `${QUEUED_FOR_MERGE_PREFIX} #1`;
const JUMP_THE_QUEUE_PR_LABEL = 'JUMP THE QUEUE';
const DEFAULT_PR_TITLE_REGEX = '^(build|ci|chore|docs|feat|fix|perf|refactor|style|test|revert|Revert|BREAKING CHANGE)((.*))?: .+$';
const COPYRIGHT_HEADER = (/* unused pure expression or super */ null && (`/*
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
*/`));


/***/ }),

/***/ 9431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ApprovalsSatisfied": () => (/* binding */ ApprovalsSatisfied),
  "approvalsSatisfied": () => (/* binding */ approvalsSatisfied)
});

// EXTERNAL MODULE: ./src/types/generated.ts
var generated = __webpack_require__(3476);
// EXTERNAL MODULE: ./node_modules/@actions/github/lib/github.js
var github = __webpack_require__(5438);
// EXTERNAL MODULE: ./src/octokit.ts
var octokit = __webpack_require__(6161);
// EXTERNAL MODULE: ./src/utils/get-core-member-logins.ts
var get_core_member_logins = __webpack_require__(7290);
// EXTERNAL MODULE: ./node_modules/bluebird/js/release/bluebird.js
var bluebird = __webpack_require__(8710);
// EXTERNAL MODULE: ./src/utils/convert-to-team-slug.ts
var convert_to_team_slug = __webpack_require__(489);
// EXTERNAL MODULE: ./node_modules/@actions/core/lib/core.js
var core = __webpack_require__(2186);
;// CONCATENATED MODULE: ./src/utils/paginate-all-reviews.ts
/*
Copyright 2022 Expedia, Inc.
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


const paginateAllReviews = async (prNumber, page = 1) => {
    const response = await octokit/* octokit.pulls.listReviews */.K.pulls.listReviews({
        pull_number: prNumber,
        per_page: 100,
        page,
        ...github.context.repo
    });
    if (!response.data.length) {
        return [];
    }
    return response.data.concat(await paginateAllReviews(prNumber, page + 1));
};

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(250);
// EXTERNAL MODULE: ./src/helpers/create-pr-comment.ts
var create_pr_comment = __webpack_require__(3461);
;// CONCATENATED MODULE: ./src/helpers/approvals-satisfied.ts
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










class ApprovalsSatisfied extends generated/* HelperInputs */.s {
}
const approvalsSatisfied = async ({ teams, users, number_of_reviewers = '1', required_review_overrides, pull_number, body } = {}) => {
    const prNumber = pull_number ? Number(pull_number) : github.context.issue.number;
    const teamOverrides = required_review_overrides?.split(',').map(overrideString => {
        const [team, numberOfRequiredReviews] = overrideString.split(':');
        return { team, numberOfRequiredReviews };
    });
    const teamsList = updateTeamsList(teams?.split('\n'));
    if (!validateTeamsList(teamsList)) {
        core.setFailed('If teams input is in the format "org/team", then the org must be the same as the repository org');
        return false;
    }
    const usersList = users?.split('\n');
    const logs = [];
    const reviews = await paginateAllReviews(prNumber);
    const approverLogins = reviews
        .filter(({ state }) => state === 'APPROVED')
        .map(({ user }) => user?.login)
        .filter(Boolean);
    logs.push(`PR already approved by: ${approverLogins.toString()}`);
    const requiredCodeOwnersEntries = teamsList || usersList
        ? createArtificialCodeOwnersEntry({ teams: teamsList, users: usersList })
        : await (0,get_core_member_logins/* getRequiredCodeOwnersEntries */.q)(prNumber);
    const requiredCodeOwnersEntriesWithOwners = (0,lodash.uniqBy)(requiredCodeOwnersEntries.filter(({ owners }) => owners.length), 'owners');
    const codeOwnersEntrySatisfiesApprovals = async (entry) => {
        const loginsLists = await (0,bluebird.map)(entry.owners, async (teamOrUsers) => {
            if (isTeam(teamOrUsers)) {
                return await fetchTeamLogins(teamOrUsers);
            }
            else {
                return teamOrUsers.replaceAll('@', '').split(',');
            }
        });
        const codeOwnerLogins = (0,lodash.uniq)(loginsLists.flat());
        const numberOfApprovals = approverLogins.filter(login => codeOwnerLogins.includes(login)).length;
        const numberOfRequiredReviews = teamOverrides?.find(({ team }) => team && entry.owners.includes(team))?.numberOfRequiredReviews ?? number_of_reviewers;
        logs.push(`Current number of approvals satisfied for ${entry.owners}: ${numberOfApprovals}`);
        logs.push(`Number of required reviews: ${numberOfRequiredReviews}`);
        return numberOfApprovals >= Number(numberOfRequiredReviews);
    };
    if (requiredCodeOwnersEntriesWithOwners.length) {
        logs.push(`Required code owners: ${requiredCodeOwnersEntriesWithOwners.map(({ owners }) => owners).toString()}`);
    }
    const booleans = await Promise.all(requiredCodeOwnersEntriesWithOwners.map(codeOwnersEntrySatisfiesApprovals));
    const approvalsSatisfied = booleans.every(Boolean);
    if (!approvalsSatisfied) {
        logs.unshift('Required approvals not satisfied:\n');
        if (body) {
            logs.unshift(body + '\n');
            await (0,create_pr_comment.createPrComment)({
                body: logs.join('\n')
            });
        }
    }
    core.info(logs.join('\n'));
    return approvalsSatisfied;
};
const createArtificialCodeOwnersEntry = ({ teams = [], users = [] }) => [
    { owners: teams.concat(users) }
];
const isTeam = (teamOrUsers) => teamOrUsers.includes('/');
const fetchTeamLogins = async (team) => {
    const { data } = await octokit/* octokit.teams.listMembersInOrg */.K.teams.listMembersInOrg({
        org: github.context.repo.owner,
        team_slug: (0,convert_to_team_slug/* convertToTeamSlug */.$)(team),
        per_page: 100
    });
    return data.map(({ login }) => login);
};
const updateTeamsList = (teamsList) => {
    return teamsList?.map(team => {
        if (!team.includes('/')) {
            return `${github.context.repo.owner}/${team}`;
        }
        else {
            return team;
        }
    });
};
const validateTeamsList = (teamsList) => {
    return (teamsList?.every(team => {
        const inputOrg = team.split('/')[0];
        return inputOrg === github.context.repo.owner;
    }) ?? true);
};


/***/ }),

/***/ 3461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePrComment": () => (/* binding */ CreatePrComment),
/* harmony export */   "createPrComment": () => (/* binding */ createPrComment)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9042);
/* harmony import */ var _types_generated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3476);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6161);
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




class CreatePrComment extends _types_generated__WEBPACK_IMPORTED_MODULE_3__/* .HelperInputs */ .s {
    constructor() {
        super(...arguments);
        this.body = '';
    }
}
const emptyResponse = { data: [] };
const getFirstPrByCommit = async (sha, repo_name, repo_owner_name) => {
    const prs = (sha &&
        (await _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.repos.listPullRequestsAssociatedWithCommit */ .K.repos.listPullRequestsAssociatedWithCommit({
            commit_sha: sha,
            repo: repo_name ?? _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.repo,
            owner: repo_owner_name ?? _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.owner,
            ..._constants__WEBPACK_IMPORTED_MODULE_0__/* .GITHUB_OPTIONS */ .Cc
        }))) ||
        emptyResponse;
    return prs.data.find(Boolean)?.number;
};
const getCommentByUser = async (login, pull_number, repo_name, repo_owner_name) => {
    const comments = (login &&
        (await _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.issues.listComments */ .K.issues.listComments({
            issue_number: pull_number ? Number(pull_number) : _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.issue.number,
            repo: repo_name ?? _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.repo,
            owner: repo_owner_name ?? _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.owner
        }))) ||
        emptyResponse;
    return comments.data.find(comment => comment?.user?.login === login)?.id;
};
const createPrComment = async ({ body, sha, login, pull_number, repo_name, repo_owner_name }) => {
    const defaultPrNumber = _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.issue.number;
    if (!sha && !login) {
        return _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.issues.createComment */ .K.issues.createComment({
            body,
            issue_number: pull_number ? Number(pull_number) : defaultPrNumber,
            repo: repo_name ?? _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.repo,
            owner: repo_owner_name ?? _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.owner
        });
    }
    const prNumber = (await getFirstPrByCommit(sha, repo_name, repo_owner_name)) ?? (pull_number ? Number(pull_number) : defaultPrNumber);
    const commentId = await getCommentByUser(login, pull_number, repo_name, repo_owner_name);
    if (commentId) {
        return _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.issues.updateComment */ .K.issues.updateComment({
            comment_id: commentId,
            body,
            repo: repo_name ?? _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.repo,
            owner: repo_owner_name ?? _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.owner
        });
    }
    else {
        return _octokit__WEBPACK_IMPORTED_MODULE_2__/* .octokit.issues.createComment */ .K.issues.createComment({
            body,
            issue_number: prNumber,
            repo: repo_name ?? _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.repo,
            owner: repo_owner_name ?? _actions_github__WEBPACK_IMPORTED_MODULE_1__.context.repo.owner
        });
    }
};


/***/ }),

/***/ 6161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ octokit),
/* harmony export */   "o": () => (/* binding */ octokitGraphql)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adobe_node_fetch_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3006);
/* harmony import */ var _adobe_node_fetch_retry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_node_fetch_retry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_2__);
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



const githubToken = _actions_core__WEBPACK_IMPORTED_MODULE_0__.getInput('github_token', { required: true });
const { rest: octokit, graphql: octokitGraphql } = (0,_actions_github__WEBPACK_IMPORTED_MODULE_2__.getOctokit)(githubToken, { request: { fetch: _adobe_node_fetch_retry__WEBPACK_IMPORTED_MODULE_1__ } });


/***/ }),

/***/ 3476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ HelperInputs)
/* harmony export */ });
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
class HelperInputs {
}


/***/ }),

/***/ 489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ convertToTeamSlug)
/* harmony export */ });
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
const convertToTeamSlug = (codeOwner) => codeOwner.substring(codeOwner.indexOf('/') + 1);


/***/ }),

/***/ 9180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ getChangedFilepaths)
/* harmony export */ });
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6161);
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


const getChangedFilepaths = async (pull_number, ignore_deleted) => {
    const changedFiles = await paginateAllChangedFilepaths(pull_number);
    const filesToMap = ignore_deleted ? changedFiles.filter(file => file.status !== 'removed') : changedFiles;
    return filesToMap.map(file => file.filename);
};
const paginateAllChangedFilepaths = async (pull_number, page = 1) => {
    const response = await _octokit__WEBPACK_IMPORTED_MODULE_1__/* .octokit.pulls.listFiles */ .K.pulls.listFiles({
        pull_number,
        per_page: 100,
        page,
        ..._actions_github__WEBPACK_IMPORTED_MODULE_0__.context.repo
    });
    if (!response.data.length) {
        return [];
    }
    return response.data.concat(await paginateAllChangedFilepaths(pull_number, page + 1));
};


/***/ }),

/***/ 7290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ getCoreMemberLogins),
/* harmony export */   "q": () => (/* binding */ getRequiredCodeOwnersEntries)
/* harmony export */ });
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2186);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codeowners_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4445);
/* harmony import */ var codeowners_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codeowners_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(250);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5438);
/* harmony import */ var _actions_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_actions_github__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _get_changed_filepaths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9180);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8710);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _octokit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6161);
/* harmony import */ var _convert_to_team_slug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(489);
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








const getCoreMemberLogins = async (pull_number, teams) => {
    const codeOwners = teams ?? getCodeOwnersFromEntries(await getRequiredCodeOwnersEntries(pull_number));
    const teamsAndLogins = await getCoreTeamsAndLogins(codeOwners);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniq)(teamsAndLogins.map(({ login }) => login));
};
const getRequiredCodeOwnersEntries = async (pull_number) => {
    const codeOwners = (await (0,codeowners_utils__WEBPACK_IMPORTED_MODULE_1__.loadOwners)(process.cwd())) ?? [];
    const changedFilePaths = await (0,_get_changed_filepaths__WEBPACK_IMPORTED_MODULE_4__/* .getChangedFilepaths */ .s)(pull_number);
    return changedFilePaths.map(filePath => (0,codeowners_utils__WEBPACK_IMPORTED_MODULE_1__.matchFile)(filePath, codeOwners)).filter(Boolean);
};
const getCoreTeamsAndLogins = async (codeOwners) => {
    if (!codeOwners?.length) {
        _actions_core__WEBPACK_IMPORTED_MODULE_0__.setFailed('No code owners found. Please provide a "teams" input or set up a CODEOWNERS file in your repo.');
        throw new Error();
    }
    const teamsAndLogins = await (0,bluebird__WEBPACK_IMPORTED_MODULE_5__.map)(codeOwners, async (team) => _octokit__WEBPACK_IMPORTED_MODULE_6__/* .octokit.teams.listMembersInOrg */ .K.teams.listMembersInOrg({
        org: _actions_github__WEBPACK_IMPORTED_MODULE_3__.context.repo.owner,
        team_slug: team,
        per_page: 100
    })
        .then(listMembersResponse => listMembersResponse.data.map(({ login }) => ({ team, login }))));
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.union)(...teamsAndLogins);
};
const getCodeOwnersFromEntries = (codeOwnersEntries) => {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniq)(codeOwnersEntries
        .map(entry => entry.owners)
        .flat()
        .filter(Boolean)
        .map(codeOwner => (0,_convert_to_team_slug__WEBPACK_IMPORTED_MODULE_7__/* .convertToTeamSlug */ .$)(codeOwner)));
};


/***/ })

};

//# sourceMappingURL=431.index.js.map