# Backend validation snapshot - October 28, 2026

These 144 records document existing test cases from one successful clean local
Node 22.23.4 coverage run. They are not 144 newly implemented tests or 144
separate executions. The underlying test code is unchanged except for the
advisory-timeout expectation described in the maintenance report.

All 20 suites and 144 tests passed. Each record includes a source hash, the
shared test-report and dependency-lock hashes, the original duration and
result, and its position in its suite. Parameterized cases can share a test
name; their suite ordinal and matching-name occurrence identify each result.
The full raw report is retained locally under `.local-inference/` and is not
published with this snapshot. No private environment values, uploaded evidence,
account records, or databases are included.

The requested series consists of 144 per-case record commits and 8 commits for
the test fix, dependency remediation, documentation, README, and this index.
It adds no new CI, staging, deployment, or external-service validation claims.

See [backend validation and reproduction](../../../BACKEND_VALIDATION.md).
The machine-readable [manifest](manifest.json) lists each record and its hash.

## Case records

- [backend-2026-10-28-001](001-allows-browser-login-preflight-from-expo-without-all.json) - `backend/tests/api.test.js`, case 1: API Endpoints allows browser login preflight from Expo without allowing arbitrary origins
- [backend-2026-10-28-002](002-should-return-200-for-health-check.json) - `backend/tests/api.test.js`, case 2: API Endpoints should return 200 for health check
- [backend-2026-10-28-003](003-rejects-oversized-json-bodies-with-a-stable-api-erro.json) - `backend/tests/api.test.js`, case 3: API Endpoints rejects oversized JSON bodies with a stable API error
- [backend-2026-10-28-004](004-should-signup-a-new-user.json) - `backend/tests/api.test.js`, case 4: API Endpoints should signup a new user
- [backend-2026-10-28-005](005-exposes-application-and-reward-metrics-for-the-inter.json) - `backend/tests/api.test.js`, case 5: API Endpoints exposes application and reward metrics for the internal monitoring stack
- [backend-2026-10-28-006](006-should-not-signup-with-existing-username.json) - `backend/tests/api.test.js`, case 6: API Endpoints should not signup with existing username
- [backend-2026-10-28-007](007-should-login-with-correct-credentials.json) - `backend/tests/api.test.js`, case 7: API Endpoints should login with correct credentials
- [backend-2026-10-28-008](008-should-reject-signup-when-contact-details-are-missin.json) - `backend/tests/api.test.js`, case 8: API Endpoints should reject signup when contact details are missing
- [backend-2026-10-28-009](009-should-not-login-with-wrong-credentials.json) - `backend/tests/api.test.js`, case 9: API Endpoints should not login with wrong credentials
- [backend-2026-10-28-010](010-rejects-private-endpoints-without-an-access-token.json) - `backend/tests/api.test.js`, case 10: JWT authentication and authorization rejects private endpoints without an access token
- [backend-2026-10-28-011](011-rejects-invalid-access-tokens.json) - `backend/tests/api.test.js`, case 11: JWT authentication and authorization rejects invalid access tokens
- [backend-2026-10-28-012](012-accepts-a-signed-access-token-and-derives-resource-o.json) - `backend/tests/api.test.js`, case 12: JWT authentication and authorization accepts a signed access token and derives resource ownership from it
- [backend-2026-10-28-013](013-prevents-another-user-from-changing-an-owned-resourc.json) - `backend/tests/api.test.js`, case 13: JWT authentication and authorization prevents another user from changing an owned resource
- [backend-2026-10-28-014](014-prevents-a-standard-user-from-accessing-admin-routes.json) - `backend/tests/api.test.js`, case 14: JWT authentication and authorization prevents a standard user from accessing admin routes
- [backend-2026-10-28-015](015-allows-a-current-administrator-to-access-role-protec.json) - `backend/tests/api.test.js`, case 15: JWT authentication and authorization allows a current administrator to access role-protected routes
- [backend-2026-10-28-016](016-records-authentication-and-administrative-activity-i.json) - `backend/tests/api.test.js`, case 16: JWT authentication and authorization records authentication and administrative activity in the system audit log
- [backend-2026-10-28-017](017-protects-the-reward-policy-and-exposes-it-to-authent.json) - `backend/tests/api.test.js`, case 17: JWT authentication and authorization protects the reward policy and exposes it to authenticated users
- [backend-2026-10-28-018](018-restricts-reward-creation-and-payout-to-administrato.json) - `backend/tests/api.test.js`, case 18: JWT authentication and authorization restricts reward creation and payout to administrators
- [backend-2026-10-28-019](019-provides-administrator-only-reward-pause-controls-an.json) - `backend/tests/api.test.js`, case 19: JWT authentication and authorization provides administrator-only reward pause controls and an audit trail
- [backend-2026-10-28-020](020-verifies-wallet-ownership-with-a-one-time-signed-cha.json) - `backend/tests/api.test.js`, case 20: JWT authentication and authorization verifies wallet ownership with a one-time signed challenge
- [backend-2026-10-28-021](021-prevents-a-verified-wallet-from-being-shared-across-.json) - `backend/tests/api.test.js`, case 21: JWT authentication and authorization prevents a verified wallet from being shared across accounts
- [backend-2026-10-28-022](022-returns-member-reward-history-and-safely-removes-an-.json) - `backend/tests/api.test.js`, case 22: JWT authentication and authorization returns member reward history and safely removes an idle wallet
- [backend-2026-10-28-023](023-rotates-refresh-tokens-and-rejects-reuse-of-the-old-.json) - `backend/tests/api.test.js`, case 23: JWT authentication and authorization rotates refresh tokens and rejects reuse of the old token
- [backend-2026-10-28-024](024-revokes-a-refresh-token-on-logout.json) - `backend/tests/api.test.js`, case 24: JWT authentication and authorization revokes a refresh token on logout
- [backend-2026-10-28-025](025-requires-authentication-and-both-evidence-photos.json) - `backend/tests/api.test.js`, case 25: Phase 3 cleanup evidence workflow requires authentication and both evidence photos
- [backend-2026-10-28-026](026-creates-a-private-submission-and-approves-it-immedia.json) - `backend/tests/api.test.js`, case 26: Phase 3 cleanup evidence workflow creates a private submission and approves it immediately
- [backend-2026-10-28-027](027-persists-mocked-gemma-findings-through-the-authentic.json) - `backend/tests/api.test.js`, case 27: Phase 3 cleanup evidence workflow persists mocked Gemma findings through the authenticated submission workflow
- [backend-2026-10-28-028](028-does-not-require-gemma-or-human-approval-after-a-val.json) - `backend/tests/api.test.js`, case 28: Phase 3 cleanup evidence workflow does not require Gemma or human approval after a valid upload
- [backend-2026-10-28-029](029-retains-evidence-and-approval-when-advisory-live-inf.json) - `backend/tests/api.test.js`, case 29: Phase 3 cleanup evidence workflow retains evidence and approval when advisory live inference times out
- [backend-2026-10-28-030](030-prevents-other-users-from-accessing-private-submissi.json) - `backend/tests/api.test.js`, case 30: Phase 3 cleanup evidence workflow prevents other users from accessing private submission evidence
- [backend-2026-10-28-031](031-automatically-rejects-an-exact-duplicate-and-permits.json) - `backend/tests/api.test.js`, case 31: Phase 3 cleanup evidence workflow automatically rejects an exact duplicate and permits one appeal
- [backend-2026-10-28-032](032-separates-the-latest-personal-submission-from-stored.json) - `backend/tests/api.test.js`, case 32: Phase 3 cleanup evidence workflow separates the latest personal submission from stored admin records
- [backend-2026-10-28-033](033-restricts-review-decisions-to-admins-and-prevents-se.json) - `backend/tests/api.test.js`, case 33: Phase 3 cleanup evidence workflow restricts review decisions to admins and prevents self-review
- [backend-2026-10-28-034](034-creates-an-event-through-the-versioned-api.json) - `backend/tests/integration/events.integration.test.js`, case 1: Events API integration creates an event through the versioned API
- [backend-2026-10-28-035](035-lists-events-through-the-versioned-api.json) - `backend/tests/integration/events.integration.test.js`, case 2: Events API integration lists events through the versioned API
- [backend-2026-10-28-036](036-rejects-an-incomplete-event.json) - `backend/tests/integration/events.integration.test.js`, case 3: Events API integration rejects an incomplete event
- [backend-2026-10-28-037](037-updates-an-event-owned-by-the-requesting-user.json) - `backend/tests/integration/events.integration.test.js`, case 4: Events API integration updates an event owned by the requesting user
- [backend-2026-10-28-038](038-deletes-an-event-owned-by-the-requesting-user.json) - `backend/tests/integration/events.integration.test.js`, case 5: Events API integration deletes an event owned by the requesting user
- [backend-2026-10-28-039](039-should-return-health-status.json) - `backend/tests/integration/health.integration.test.js`, case 1: Health Check Tests GET /health should return health status
- [backend-2026-10-28-040](040-should-include-timestamp.json) - `backend/tests/integration/health.integration.test.js`, case 2: Health Check Tests GET /health should include timestamp
- [backend-2026-10-28-041](041-should-return-readiness-status.json) - `backend/tests/integration/health.integration.test.js`, case 3: Health Check Tests GET /ready should return readiness status
- [backend-2026-10-28-042](042-classifies-api-v1-login-as-post-activity.json) - `backend/tests/unit/auditService.unit.test.js`, case 1: system audit classification and privacy classifies /api/v1/login as POST activity
- [backend-2026-10-28-043](043-classifies-api-v1-admin-users-as-get-activity.json) - `backend/tests/unit/auditService.unit.test.js`, case 2: system audit classification and privacy classifies /api/v1/admin/users as GET activity
- [backend-2026-10-28-044](044-classifies-api-v1-evidence-submissions-12-review-as-.json) - `backend/tests/unit/auditService.unit.test.js`, case 3: system audit classification and privacy classifies /api/v1/evidence/submissions/12/review as PATCH activity
- [backend-2026-10-28-045](045-classifies-api-v1-events-12-as-delete-activity.json) - `backend/tests/unit/auditService.unit.test.js`, case 4: system audit classification and privacy classifies /api/v1/events/12 as DELETE activity
- [backend-2026-10-28-046](046-classifies-api-v1-admin-users-12-as-delete-activity.json) - `backend/tests/unit/auditService.unit.test.js`, case 5: system audit classification and privacy classifies /api/v1/admin/users/12 as DELETE activity
- [backend-2026-10-28-047](047-does-not-audit-ordinary-reads-and-removes-query-stri.json) - `backend/tests/unit/auditService.unit.test.js`, case 6: system audit classification and privacy does not audit ordinary reads and removes query strings
- [backend-2026-10-28-048](048-uses-a-keyed-one-way-hash-for-network-metadata.json) - `backend/tests/unit/auditService.unit.test.js`, case 7: system audit classification and privacy uses a keyed one-way hash for network metadata
- [backend-2026-10-28-049](049-creates-a-deterministic-local-simulation-without-an-.json) - `backend/tests/unit/celoGateway.unit.test.js`, case 1: Celo Sepolia gateway creates a deterministic local simulation without an RPC call or private key
- [backend-2026-10-28-050](050-refuses-configuration-for-a-different-chain.json) - `backend/tests/unit/celoGateway.unit.test.js`, case 2: Celo Sepolia gateway refuses configuration for a different chain
- [backend-2026-10-28-051](051-passes-only-when-deployment-checks-succeed-and-appli.json) - `backend/tests/unit/celoPreflight.unit.test.js`, case 1: Celo pilot preflight passes only when deployment checks succeed and application payouts are paused
- [backend-2026-10-28-052](052-fails-safely-when-payouts-are-active-during-prefligh.json) - `backend/tests/unit/celoPreflight.unit.test.js`, case 2: Celo pilot preflight fails safely when payouts are active during preflight
- [backend-2026-10-28-053](053-loads-numbered-migrations-in-a-stable-order-with-che.json) - `backend/tests/unit/databaseMigrations.unit.test.js`, case 1: PostgreSQL migrations loads numbered migrations in a stable order with checksums
- [backend-2026-10-28-054](054-defines-the-core-evidence-and-reward-constraints.json) - `backend/tests/unit/databaseMigrations.unit.test.js`, case 2: PostgreSQL migrations defines the core evidence and reward constraints
- [backend-2026-10-28-055](055-should-connect-to-database.json) - `backend/tests/unit/db.unit.test.js`, case 1: Database Unit Tests Connection should connect to database
- [backend-2026-10-28-056](056-should-handle-connection-errors.json) - `backend/tests/unit/db.unit.test.js`, case 2: Database Unit Tests Connection should handle connection errors
- [backend-2026-10-28-057](057-should-execute-select-queries.json) - `backend/tests/unit/db.unit.test.js`, case 3: Database Unit Tests Query Operations should execute SELECT queries
- [backend-2026-10-28-058](058-should-execute-insert-queries.json) - `backend/tests/unit/db.unit.test.js`, case 4: Database Unit Tests Query Operations should execute INSERT queries
- [backend-2026-10-28-059](059-should-execute-update-queries.json) - `backend/tests/unit/db.unit.test.js`, case 5: Database Unit Tests Query Operations should execute UPDATE queries
- [backend-2026-10-28-060](060-should-execute-delete-queries.json) - `backend/tests/unit/db.unit.test.js`, case 6: Database Unit Tests Query Operations should execute DELETE queries
- [backend-2026-10-28-061](061-should-commit-transactions.json) - `backend/tests/unit/db.unit.test.js`, case 7: Database Unit Tests Transaction Handling should commit transactions
- [backend-2026-10-28-062](062-should-rollback-on-error.json) - `backend/tests/unit/db.unit.test.js`, case 8: Database Unit Tests Transaction Handling should rollback on error
- [backend-2026-10-28-063](063-should-validate-correct-event-data.json) - `backend/tests/unit/events.unit.test.js`, case 1: Event Handlers Unit Tests validateEvent should validate correct event data
- [backend-2026-10-28-064](064-should-reject-missing-required-fields.json) - `backend/tests/unit/events.unit.test.js`, case 2: Event Handlers Unit Tests validateEvent should reject missing required fields
- [backend-2026-10-28-065](065-should-reject-invalid-date-format.json) - `backend/tests/unit/events.unit.test.js`, case 3: Event Handlers Unit Tests validateEvent should reject invalid date format
- [backend-2026-10-28-066](066-should-format-event-data-correctly.json) - `backend/tests/unit/events.unit.test.js`, case 4: Event Handlers Unit Tests formatEventResponse should format event data correctly
- [backend-2026-10-28-067](067-should-filter-by-status.json) - `backend/tests/unit/events.unit.test.js`, case 5: Event Handlers Unit Tests filterEvents should filter by status
- [backend-2026-10-28-068](068-should-filter-by-date-range.json) - `backend/tests/unit/events.unit.test.js`, case 6: Event Handlers Unit Tests filterEvents should filter by date range
- [backend-2026-10-28-069](069-recovers-persisted-pending-work-coalesces-kicks-and-.json) - `backend/tests/unit/evidenceAiWorker.unit.test.js`, case 1: durable private evidence AI worker recovers persisted pending work, coalesces kicks and never lowers heuristic risk
- [backend-2026-10-28-070](070-retains-original-risk-and-decisions-when-a-reviewer-.json) - `backend/tests/unit/evidenceAiWorker.unit.test.js`, case 2: durable private evidence AI worker retains original risk and decisions when a reviewer has already approved
- [backend-2026-10-28-071](071-preserves-private-evidence-for-manual-review-on-stor.json) - `backend/tests/unit/evidenceAiWorker.unit.test.js`, case 3: durable private evidence AI worker preserves private evidence for manual review on storage failure
- [backend-2026-10-28-072](072-saves-validated-findings-when-a-competing-stream-rec.json) - `backend/tests/unit/evidenceAiWorker.unit.test.js`, case 4: durable private evidence AI worker saves validated findings when a competing stream records cancellation
- [backend-2026-10-28-073](073-does-not-overwrite-completed-analysis-with-a-later-c.json) - `backend/tests/unit/evidenceAiWorker.unit.test.js`, case 5: durable private evidence AI worker does not overwrite completed analysis with a later cancellation
- [backend-2026-10-28-074](074-keeps-pending-work-for-a-later-restart-while-disable.json) - `backend/tests/unit/evidenceAiWorker.unit.test.js`, case 6: durable private evidence AI worker keeps pending work for a later restart while disabled
- [backend-2026-10-28-075](075-reads-privately-stored-evidence-without-creating-pub.json) - `backend/tests/unit/evidenceStorageRead.unit.test.js`, case 1: private evidence reads for background verification reads privately stored evidence without creating public URLs
- [backend-2026-10-28-076](076-rejects-paths-outside-the-configured-evidence-direct.json) - `backend/tests/unit/evidenceStorageRead.unit.test.js`, case 2: private evidence reads for background verification rejects paths outside the configured evidence directory
- [backend-2026-10-28-077](077-refuses-oversized-files-before-loading-them-into-mem.json) - `backend/tests/unit/evidenceStorageRead.unit.test.js`, case 3: private evidence reads for background verification refuses oversized files before loading them into memory
- [backend-2026-10-28-078](078-delivers-evidence-inside-a-hidden-storage-directory-.json) - `backend/tests/unit/evidenceStorageRead.unit.test.js`, case 4: private evidence reads for background verification delivers evidence inside a hidden storage directory after root validation
- [backend-2026-10-28-079](079-keeps-perceptual-fingerprints-stable-across-resize-a.json) - `backend/tests/unit/evidenceVerification.unit.test.js`, case 1: Phase 4 evidence verification keeps perceptual fingerprints stable across resize and recompression
- [backend-2026-10-28-080](080-returns-explainable-scene-quality-and-synthetic-imag.json) - `backend/tests/unit/evidenceVerification.unit.test.js`, case 2: Phase 4 evidence verification returns explainable scene, quality, and synthetic-image risk details
- [backend-2026-10-28-081](081-honors-an-explicit-abort-deadline-while-waiting-for-.json) - `backend/tests/unit/gemmaTransport.unit.test.js`, case 1: honors an explicit abort deadline while waiting for response headers
- [backend-2026-10-28-082](082-does-no-network-or-image-work-when-disabled.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 1: Gemma smart verification does no network or image work when disabled
- [backend-2026-10-28-083](083-sends-ordered-images-without-metadata-and-validates-.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 2: Gemma smart verification sends ordered images without metadata and validates findings
- [backend-2026-10-28-084](084-preloads-fast-mode-weights-without-sending-evidence-.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 3: Gemma smart verification preloads fast-mode weights without sending evidence or generating findings
- [backend-2026-10-28-085](085-does-not-preload-when-fast-mode-is-off-and-tolerates.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 4: Gemma smart verification does not preload when fast mode is off and tolerates an offline model service
- [backend-2026-10-28-086](086-fast-mode-sends-one-ordered-comparison-preview-and-r.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 5: Gemma smart verification fast mode sends one ordered comparison preview and retains output validation
- [backend-2026-10-28-087](087-places-before-above-after-without-carrying-photo-met.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 6: Gemma smart verification places before above after without carrying photo metadata into the preview
- [backend-2026-10-28-088](088-supports-compatible-hosted-chat-completions-with-ser.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 7: Gemma smart verification supports compatible hosted chat completions with server-only credentials
- [backend-2026-10-28-089](089-reads-fragmented-ollama-ndjson-and-emits-progress-wi.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 8: Gemma smart verification reads fragmented Ollama NDJSON and emits progress without exposing unvalidated text
- [backend-2026-10-28-090](090-rejects-a-truncated-model-stream-instead-of-presenti.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 9: Gemma smart verification rejects a truncated model stream instead of presenting partial findings
- [backend-2026-10-28-091](091-does-not-contact-the-model-for-a-cancelled-foregroun.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 10: Gemma smart verification does not contact the model for a cancelled foreground request
- [backend-2026-10-28-092](092-rejects-malformed-or-unsupported-output.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 11: Gemma smart verification rejects malformed or unsupported output
- [backend-2026-10-28-093](093-rejects-malformed-or-unsupported-output.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 12: Gemma smart verification rejects malformed or unsupported output
- [backend-2026-10-28-094](094-rejects-malformed-or-unsupported-output.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 13: Gemma smart verification rejects malformed or unsupported output
- [backend-2026-10-28-095](095-rejects-malformed-or-unsupported-output.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 14: Gemma smart verification rejects malformed or unsupported output
- [backend-2026-10-28-096](096-rejects-malformed-or-unsupported-output.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 15: Gemma smart verification rejects malformed or unsupported output
- [backend-2026-10-28-097](097-rejects-malformed-or-unsupported-output.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 16: Gemma smart verification rejects malformed or unsupported output
- [backend-2026-10-28-098](098-never-lets-a-model-waive-human-review.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 17: Gemma smart verification never lets a model waive human review
- [backend-2026-10-28-099](099-rejects-repeated-and-near-repeated-findings.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 18: Gemma smart verification rejects repeated and near-repeated findings
- [backend-2026-10-28-100](100-flags-obvious-contradictions-and-unsupported-numeric.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 19: Gemma smart verification flags obvious contradictions and unsupported numeric claims
- [backend-2026-10-28-101](101-requires-uncertainty-for-illustrations-and-evidence-.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 20: Gemma smart verification requires uncertainty for illustrations and evidence for organic waste
- [backend-2026-10-28-102](102-rejects-repeated-sentences-and-placeholder-findings-.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 21: Gemma smart verification rejects repeated sentences and placeholder findings within a single entry
- [backend-2026-10-28-103](103-routes-quality-failures-and-token-limit-output-to-re.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 22: Gemma smart verification routes quality failures and token-limit output to review
- [backend-2026-10-28-104](104-rejects-unsafe-gemma-max-output-tokens-configuration.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 23: Gemma smart verification rejects unsafe GEMMA_MAX_OUTPUT_TOKENS configuration
- [backend-2026-10-28-105](105-rejects-unsafe-gemma-image-max-size-configuration.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 24: Gemma smart verification rejects unsafe GEMMA_IMAGE_MAX_SIZE configuration
- [backend-2026-10-28-106](106-rejects-unsafe-gemma-num-threads-configuration.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 25: Gemma smart verification rejects unsafe GEMMA_NUM_THREADS configuration
- [backend-2026-10-28-107](107-rejects-unsafe-gemma-context-length-configuration.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 26: Gemma smart verification rejects unsafe GEMMA_CONTEXT_LENGTH configuration
- [backend-2026-10-28-108](108-fails-safely-on-invalid-json-provider-errors-and-ove.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 27: Gemma smart verification fails safely on invalid JSON, provider errors and oversized responses
- [backend-2026-10-28-109](109-aborts-timed-out-requests-and-preserves-manual-revie.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 28: Gemma smart verification aborts timed out requests and preserves manual review
- [backend-2026-10-28-110](110-rejects-insecure-remote-configuration-without-a-netw.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 29: Gemma smart verification rejects insecure remote configuration without a network call
- [backend-2026-10-28-111](111-rejects-deadlines-above-the-bounded-cpu-inference-ma.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 30: Gemma smart verification rejects deadlines above the bounded CPU inference maximum
- [backend-2026-10-28-112](112-adds-uncertainty-to-existing-signals-without-overrid.json) - `backend/tests/unit/gemmaVerification.unit.test.js`, case 31: Gemma smart verification adds uncertainty to existing signals without overriding duplicate rejection
- [backend-2026-10-28-113](113-recognizes-supported-bcrypt-hashes.json) - `backend/tests/unit/passwordMigration.unit.test.js`, case 1: plaintext password migration recognizes supported bcrypt hashes
- [backend-2026-10-28-114](114-flags-non-bcrypt-retained-value-password123.json) - `backend/tests/unit/passwordMigration.unit.test.js`, case 2: plaintext password migration flags non-bcrypt retained value: password123
- [backend-2026-10-28-115](115-flags-non-bcrypt-retained-value.json) - `backend/tests/unit/passwordMigration.unit.test.js`, case 3: plaintext password migration flags non-bcrypt retained value:
- [backend-2026-10-28-116](116-flags-non-bcrypt-retained-value-2b-04-short.json) - `backend/tests/unit/passwordMigration.unit.test.js`, case 4: plaintext password migration flags non-bcrypt retained value: $2b$04$short
- [backend-2026-10-28-117](117-flags-non-bcrypt-retained-value-pbkdf2-not-supported.json) - `backend/tests/unit/passwordMigration.unit.test.js`, case 5: plaintext password migration flags non-bcrypt retained value: pbkdf2:not-supported
- [backend-2026-10-28-118](118-defines-the-pilot-reward-amounts-and-payout-limits.json) - `backend/tests/unit/rewardPolicy.unit.test.js`, case 1: CELO reward policy defines the pilot reward amounts and payout limits
- [backend-2026-10-28-119](119-combines-category-and-impact-multipliers-determinist.json) - `backend/tests/unit/rewardPolicy.unit.test.js`, case 2: CELO reward policy combines category and impact multipliers deterministically
- [backend-2026-10-28-120](120-caps-a-calculated-reward-at-the-per-submission-limit.json) - `backend/tests/unit/rewardPolicy.unit.test.js`, case 3: CELO reward policy caps a calculated reward at the per-submission limit
- [backend-2026-10-28-121](121-uses-item-count-or-weight-to-classify-impact.json) - `backend/tests/unit/rewardPolicy.unit.test.js`, case 4: CELO reward policy uses item count or weight to classify impact
- [backend-2026-10-28-122](122-creates-one-claim-when-the-same-submission-is-claime.json) - `backend/tests/unit/rewardService.unit.test.js`, case 1: idempotent CELO reward payments creates one claim when the same submission is claimed repeatedly
- [backend-2026-10-28-123](123-broadcasts-and-confirms-a-payout-only-once.json) - `backend/tests/unit/rewardService.unit.test.js`, case 2: idempotent CELO reward payments broadcasts and confirms a payout only once
- [backend-2026-10-28-124](124-blocks-a-payout-while-the-operational-reward-switch-.json) - `backend/tests/unit/rewardService.unit.test.js`, case 3: idempotent CELO reward payments blocks a payout while the operational reward switch is paused
- [backend-2026-10-28-125](125-allows-only-one-broadcast-under-concurrent-payout-re.json) - `backend/tests/unit/rewardService.unit.test.js`, case 4: idempotent CELO reward payments allows only one broadcast under concurrent payout requests
- [backend-2026-10-28-126](126-blocks-a-payout-already-recorded-by-the-on-chain-con.json) - `backend/tests/unit/rewardService.unit.test.js`, case 5: idempotent CELO reward payments blocks a payout already recorded by the on-chain contract
- [backend-2026-10-28-127](127-reconciles-a-previously-broadcast-payment-after-conf.json) - `backend/tests/unit/rewardService.unit.test.js`, case 6: idempotent CELO reward payments reconciles a previously broadcast payment after confirmation waiting fails
- [backend-2026-10-28-128](128-blocks-payment-until-the-user-has-a-verified-wallet.json) - `backend/tests/unit/rewardService.unit.test.js`, case 7: idempotent CELO reward payments blocks payment until the user has a verified wallet
- [backend-2026-10-28-129](129-reactivates-a-wallet-blocked-claim-after-ownership-v.json) - `backend/tests/unit/rewardService.unit.test.js`, case 8: idempotent CELO reward payments reactivates a wallet-blocked claim after ownership verification
- [backend-2026-10-28-130](130-returns-security-headers-without-exposing-express.json) - `backend/tests/unit/security.unit.test.js`, case 1: HTTP security middleware returns security headers without exposing Express
- [backend-2026-10-28-131](131-returns-a-stable-json-error-after-the-configured-req.json) - `backend/tests/unit/security.unit.test.js`, case 2: HTTP security middleware returns a stable JSON error after the configured request limit
- [backend-2026-10-28-132](132-recognizes-a-jpeg-fixture-by-extension-and-signature.json) - `backend/tests/unit/stagingImages.unit.test.js`, case 1: staging image fixture validation recognizes a JPEG fixture by extension and signature
- [backend-2026-10-28-133](133-rejects-content-that-does-not-match-its-extension.json) - `backend/tests/unit/stagingImages.unit.test.js`, case 2: staging image fixture validation rejects content that does not match its extension
- [backend-2026-10-28-134](134-checks-the-secondary-webp-signature.json) - `backend/tests/unit/stagingImages.unit.test.js`, case 3: staging image fixture validation checks the secondary WebP signature
- [backend-2026-10-28-135](135-keeps-local-simulation-valid-and-reports-broadcastin.json) - `backend/tests/unit/startupValidation.unit.test.js`, case 1: runtime environment validation keeps local simulation valid and reports broadcasting as disabled
- [backend-2026-10-28-136](136-rejects-incomplete-live-reward-configuration.json) - `backend/tests/unit/startupValidation.unit.test.js`, case 2: runtime environment validation rejects incomplete live reward configuration
- [backend-2026-10-28-137](137-accepts-a-complete-celo-sepolia-pilot-configuration.json) - `backend/tests/unit/startupValidation.unit.test.js`, case 3: runtime environment validation accepts a complete Celo Sepolia pilot configuration
- [backend-2026-10-28-138](138-requires-secure-sentry-and-audit-secrets-in-producti.json) - `backend/tests/unit/startupValidation.unit.test.js`, case 4: runtime environment validation requires secure Sentry and audit secrets in production
- [backend-2026-10-28-139](139-requires-protected-metrics-in-production.json) - `backend/tests/unit/startupValidation.unit.test.js`, case 5: runtime environment validation requires protected metrics in production
- [backend-2026-10-28-140](140-rejects-unsafe-http-protection-limits.json) - `backend/tests/unit/startupValidation.unit.test.js`, case 6: runtime environment validation rejects unsafe HTTP protection limits
- [backend-2026-10-28-141](141-rejects-invalid-sentry-sampling-rates.json) - `backend/tests/unit/startupValidation.unit.test.js`, case 7: runtime environment validation rejects invalid Sentry sampling rates
- [backend-2026-10-28-142](142-rejects-incomplete-optional-s3-storage-configuration.json) - `backend/tests/unit/startupValidation.unit.test.js`, case 8: runtime environment validation rejects incomplete optional S3 storage configuration
- [backend-2026-10-28-143](143-accepts-a-postgresql-connection-url.json) - `backend/tests/unit/startupValidation.unit.test.js`, case 9: runtime environment validation accepts a PostgreSQL connection URL
- [backend-2026-10-28-144](144-rejects-an-invalid-postgresql-connection-url.json) - `backend/tests/unit/startupValidation.unit.test.js`, case 10: runtime environment validation rejects an invalid PostgreSQL connection URL
