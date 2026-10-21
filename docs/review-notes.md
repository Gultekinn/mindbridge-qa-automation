# Review notes and provenance

## Course context

MindBridge is a course-provided mock learning platform. Application/framework source and setup tools were provided by the lab. The local Jira-style ticket MB-142 and PR #1 simulate a workflow; they are not live Jira or GitHub integrations. Jordan Lee is the seeded lab persona in those records, not the portfolio owner's claimed professional identity.

## Which test was curated

Two versions existed in the supplied folder. The root `tests/account_update.spec.js` used `selectOption` on a region field implemented as a text input. The version under `automation_project/tests/` uses `fill`, explicit login selectors, and waits for the dashboard. The latter was curated unchanged and passed in the Windows rerun. Do not count these duplicates as two separate automated tests.

## Live verification

On 2026-10-21, the course app ran from a temporary working copy with LAB_ID=lc4_project, Node 24.15.0, Playwright 1.64.1 and installed Chrome. better-sqlite3 was 12.11.1 rather than the supplied 11.10.0 to support this environment. Dependencies and database were separate from the original Desktop lab.

The supplied user-setup script prepared fictional user 101 with initial profile region EMEA. The unchanged account test passed (1 test, exit 0). A post-run SQLite join confirmed APAC persisted; a separate fresh browser session confirmed that APAC was displayed and captured a screenshot. These verification actions are separate from the original coursework.

The lab-only password in the test is a course seed credential for a local mock app. It is not a personal account credential. No password hashes or raw database files are included. The submitted SELECT * user query was narrowed to named non-secret fields for the public portfolio; the historical result export likewise omits password_hash. A second SQL join was added during portfolio preparation to verify the updated profile region, since the original users-only query cannot establish that change.

## Nightly analysis

The synthetic log is dated 2026-04-17. Its 14 results include retries. Five successes and nine failures match the run summary. Six explicit TimeoutError lines occur, plus one summary mention of the same word. The course generator counted seven mentions, which explains the original report's inflated occurrence count. Reviewed findings distinguish entries from mentions. The data is not this account-update run and should not be presented as 14 automated tests authored here.

## Reporting tool claim

The prompt and EOD output were used by a local report-generation sandbox provided by the course. They do not establish use of an external Microsoft Copilot service. Standalone Copilot exercises supplied as other PDF summaries remain separate small labs.

## Existing repository

The existing mindbridge-tests repository contains a generic registration example pointing to example.com. It was inspected but left unchanged. This repository presents the distinct account-update / automation-and-release lab.
