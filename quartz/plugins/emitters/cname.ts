import { FilePath, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import fs from "fs"
<<<<<<< HEAD
import chalk from "chalk"
import DepGraph from "../../depgraph"
=======
import { styleText } from "util"
>>>>>>> main

export function extractDomainFromBaseUrl(baseUrl: string) {
  const url = new URL(`https://${baseUrl}`)
  return url.hostname
}

export const CNAME: QuartzEmitterPlugin = () => ({
  name: "CNAME",
<<<<<<< HEAD
  getQuartzComponents() {
    return []
  },
  async getDependencyGraph(_ctx, _content, _resources) {
    return new DepGraph<FilePath>()
  },
  async emit({ argv, cfg }, _content, _resources): Promise<FilePath[]> {
    if (!cfg.configuration.baseUrl) {
      console.warn(chalk.yellow("CNAME emitter requires `baseUrl` to be set in your configuration"))
=======
  async emit({ argv, cfg }) {
    if (!cfg.configuration.baseUrl) {
      console.warn(
        styleText("yellow", "CNAME emitter requires `baseUrl` to be set in your configuration"),
      )
>>>>>>> main
      return []
    }
    const path = joinSegments(argv.output, "CNAME")
    const content = extractDomainFromBaseUrl(cfg.configuration.baseUrl)
    if (!content) {
      return []
    }
<<<<<<< HEAD
    fs.writeFileSync(path, content)
    return [path] as FilePath[]
  },
=======
    await fs.promises.writeFile(path, content)
    return [path] as FilePath[]
  },
  async *partialEmit() {},
>>>>>>> main
})
