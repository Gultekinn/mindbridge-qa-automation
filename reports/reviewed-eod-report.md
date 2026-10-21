# End-of-Day QA Status — Reviewed Fixture Analysis

**Audience:** Product Manager / release stakeholders  
**Dataset:** Supplied MindBridge nightly log, 2026-04-17, run gh-88421  
**Reviewed:** 2026-10-21

The supplied run summary records **14 results: 5 passed, 9 failed (35.7% pass rate)**. These figures agree with the listed outcome entries. Retry attempts are included; this is not a count of 14 distinct tests authored for this portfolio.

Checkout payment is the main failure hotspot. There are **6 explicit TimeoutError entries**, including retries, while the log summary reports 7. The original local report generator counted all seven textual mentions, including the summary mention. Its report is retained separately as historical output.

**Recommendation:** Hold promotion of the simulated build while the checkout submit-control timeout is investigated. Also review the enrollment/practice assertion failures and cart network failure. Verify the discrepancy in the summary before distributing final metrics. The log supports a failure location and symptom; it does not establish a confirmed root cause.

This is analysis of provided lab data, not a current production incident or the result of the newly rerun account-update test.
