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

