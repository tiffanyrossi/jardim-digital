#!/usr/bin/env node
import workerpool from "workerpool"
const cacheFile = "./.quartz-cache/transpiled-worker.mjs"
<<<<<<< HEAD
const { parseFiles } = await import(cacheFile)
workerpool.worker({
  parseFiles,
=======
const { parseMarkdown, processHtml } = await import(cacheFile)
workerpool.worker({
  parseMarkdown,
  processHtml,
>>>>>>> main
})
