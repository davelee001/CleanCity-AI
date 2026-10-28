# Backend test and dependency validation

Verified October 28, 2026. This covers release checklist items 1 and 2 only.

## Backend failure resolved

The full backend run originally had one failing assertion in the advisory-AI
timeout API test. It expected `gemma_unavailable` to be added to review reasons
after the upload had already been approved. The worker deliberately preserves
approval and risk signals for approved submissions.

The test now checks that a timeout is recorded, approval remains intact, the
original review reasons and overall risk stay unchanged, and the private image
is still retrievable. Production approval behavior was not changed.

## Production dependency remediation

The registry-connected production audit initially reported 10 affected packages:
1 critical, 6 high, and 3 moderate. Compatible updates were applied and the
lockfile regenerated. Patched versions include body-parser 2.4.0, proxy-addr
2.0.8, multer 2.5.0, morgan 1.12.1, ip-address 10.7.5, and undici 6.29.1.
Direct multer/morgan minimum versions and the undici override were raised.

Azure Identity is temporarily pinned to 4.13.0, which uses MSAL Node 3.8.10,
outside the affected MSAL major versions. The available newer Identity 4.14.0
still depends on MSAL 6.x. Do not remove this pin without checking the resolved
MSAL version against [the vendor advisory](https://github.com/advisories/GHSA-xcx6-jx8p-x3h5).

A scoped MSAL UUID override uses 11.1.1 to address
[the UUID advisory](https://github.com/advisories/GHSA-w5hq-g745-h8pq).
MSAL's used `uuid.v4()` API remains available in this CommonJS-compatible
release; real MSAL GUID generation was checked. No forced MSAL major upgrade
or blanket `npm audit fix --force` was used.

## Verification results

A fresh isolated install of the updated lockfile was tested with Node 22.23.4,
the supported Node major. The system Node 24 installation was not changed.

- Clean `npm ci`: passed, with native addon builds installed for Node 22.
- Complete backend suite with coverage: **20 suites, 144 tests passed**.
- Configured coverage thresholds: passed.
- Backend lint: passed.
- `npm run audit:prod`: **0 vulnerabilities**, exit code 0.
- `npm audit --omit=dev --json`: **0 vulnerabilities at every severity**.
- Native SQLite in-memory query, Sharp loading, and MSAL GUID generation: passed.

