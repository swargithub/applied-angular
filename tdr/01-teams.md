# Guidance for Structuring Code as a Team

Profile - User Profile Stuff - make that a "feature" with it's own little world, separate from other features.

- Some "rules" you might consider:

- if you are working on story card for a sprint or something, you can change anything in your feature "folder"
- stuff outside of a feature is "shared"

  - so stuff like we install from npm - e.g. import { signalStore } from "@ngrx/signals"
  - HARSH - you are not allowed to change package.json or install new node modules in the same PR as any other commits.
    - for us this requires "team approval"

- stuff that is deliberately "shared" across the application should be explicitly shared.
  - This stuff then has a higher requirement for low-level testing.
    - it is more general than our use case in a feature.
  - Any changes to these things have to have accompanying
