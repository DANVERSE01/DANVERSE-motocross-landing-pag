// Next.js with React 19 no longer exposes ReactCurrentBatchConfig on react or react-dom,
// but Turbopack still expects it. We patch both runtime modules with a minimal shim to
// keep the build stable in offline environments.
const React = require("react")
const ReactDOM = require("react-dom")

const batchConfig = { transition: null }

const applyShim = (target) => {
  if (!target.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) {
    target.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = { ReactCurrentBatchConfig: batchConfig }
    return
  }

  if (!target.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentBatchConfig) {
    target.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentBatchConfig = batchConfig
  }
}

applyShim(React)
applyShim(ReactDOM)
