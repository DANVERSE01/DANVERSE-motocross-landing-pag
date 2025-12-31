const { readFileSync, writeFileSync, existsSync } = require("fs")
const path = require("path")

const batchSnippet = `\n/* react-batch-shim */;(() => {\n  const exported = module.exports || exports\n  if (!exported) return\n  if (!exported.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) {\n    exported.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = { ReactCurrentBatchConfig: { transition: null } }\n    return\n  }\n\n  if (!exported.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentBatchConfig) {\n    exported.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentBatchConfig = { transition: null }\n  }\n})();\n`

function patchFile(filePath) {
  if (!existsSync(filePath)) {
    console.warn(`[patch-react] Skipping missing file: ${filePath}`)
    return
  }

  const content = readFileSync(filePath, "utf8")

  if (content.includes("react-batch-shim")) {
    return
  }

  writeFileSync(filePath, `${content}${batchSnippet}`)
}

const root = process.cwd()
const targets = [
  path.join(root, "node_modules", "react", "index.js"),
  path.join(root, "node_modules", "react", "cjs", "react.production.min.js"),
  path.join(root, "node_modules", "react", "cjs", "react.development.js"),
  path.join(root, "node_modules", "react-dom", "index.js"),
  path.join(root, "node_modules", "react-dom", "cjs", "react-dom.production.min.js"),
  path.join(root, "node_modules", "react-dom", "cjs", "react-dom.development.js"),
  path.join(root, "node_modules", "next", "dist", "compiled", "react", "index.js"),
  path.join(root, "node_modules", "next", "dist", "compiled", "react-dom", "index.js"),
]

targets.forEach(patchFile)
