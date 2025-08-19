import fs from "fs"
<<<<<<< HEAD
import path from "path"
import { Repository } from "@napi-rs/simple-git"
import { QuartzTransformerPlugin } from "../types"
import chalk from "chalk"
=======
import { Repository } from "@napi-rs/simple-git"
import { QuartzTransformerPlugin } from "../types"
import path from "path"
import { styleText } from "util"
>>>>>>> main

export interface Options {
  priority: ("frontmatter" | "git" | "filesystem")[]
}

const defaultOptions: Options = {
  priority: ["frontmatter", "git", "filesystem"],
}

<<<<<<< HEAD
function coerceDate(fp: string, d: any): Date {
=======
// YYYY-MM-DD
const iso8601DateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/

function coerceDate(fp: string, d: any): Date {
  // check ISO8601 date-only format
  // we treat this one as local midnight as the normal
  // js date ctor treats YYYY-MM-DD as UTC midnight
  if (typeof d === "string" && iso8601DateOnlyRegex.test(d)) {
    d = `${d}T00:00:00`
  }

>>>>>>> main
  const dt = new Date(d)
  const invalidDate = isNaN(dt.getTime()) || dt.getTime() === 0
  if (invalidDate && d !== undefined) {
    console.log(
<<<<<<< HEAD
      chalk.yellow(
=======
      styleText(
        "yellow",
>>>>>>> main
        `\nWarning: found invalid date "${d}" in \`${fp}\`. Supported formats: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format`,
      ),
    )
  }

  return invalidDate ? new Date() : dt
}

type MaybeDate = undefined | string | number
<<<<<<< HEAD
export const CreatedModifiedDate: QuartzTransformerPlugin<Partial<Options> | undefined> = (
  userOpts,
) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "CreatedModifiedDate",
    markdownPlugins() {
      return [
        () => {
          let repo: Repository | undefined = undefined
=======
export const CreatedModifiedDate: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "CreatedModifiedDate",
    markdownPlugins(ctx) {
      return [
        () => {
          let repo: Repository | undefined = undefined
          let repositoryWorkdir: string
          if (opts.priority.includes("git")) {
            try {
              repo = Repository.discover(ctx.argv.directory)
              repositoryWorkdir = repo.workdir() ?? ctx.argv.directory
            } catch (e) {
              console.log(
                styleText(
                  "yellow",
                  `\nWarning: couldn't find git repository for ${ctx.argv.directory}`,
                ),
              )
            }
          }

>>>>>>> main
          return async (_tree, file) => {
            let created: MaybeDate = undefined
            let modified: MaybeDate = undefined
            let published: MaybeDate = undefined

<<<<<<< HEAD
            const fp = file.data.filePath!
            const fullFp = path.isAbsolute(fp) ? fp : path.posix.join(file.cwd, fp)
=======
            const fp = file.data.relativePath!
            const fullFp = file.data.filePath!
>>>>>>> main
            for (const source of opts.priority) {
              if (source === "filesystem") {
                const st = await fs.promises.stat(fullFp)
                created ||= st.birthtimeMs
                modified ||= st.mtimeMs
              } else if (source === "frontmatter" && file.data.frontmatter) {
<<<<<<< HEAD
                created ||= file.data.frontmatter.date as MaybeDate
                modified ||= file.data.frontmatter.lastmod as MaybeDate
                modified ||= file.data.frontmatter.updated as MaybeDate
                modified ||= file.data.frontmatter["last-modified"] as MaybeDate
                published ||= file.data.frontmatter.publishDate as MaybeDate
              } else if (source === "git") {
                if (!repo) {
                  // Get a reference to the main git repo.
                  // It's either the same as the workdir,
                  // or 1+ level higher in case of a submodule/subtree setup
                  repo = Repository.discover(file.cwd)
                }

                try {
                  modified ||= await repo.getFileLatestModifiedDateAsync(file.data.filePath!)
                } catch {
                  console.log(
                    chalk.yellow(
                      `\nWarning: ${file.data
                        .filePath!} isn't yet tracked by git, last modification date is not available for this file`,
=======
                created ||= file.data.frontmatter.created as MaybeDate
                modified ||= file.data.frontmatter.modified as MaybeDate
                published ||= file.data.frontmatter.published as MaybeDate
              } else if (source === "git" && repo) {
                try {
                  const relativePath = path.relative(repositoryWorkdir, fullFp)
                  modified ||= await repo.getFileLatestModifiedDateAsync(relativePath)
                } catch {
                  console.log(
                    styleText(
                      "yellow",
                      `\nWarning: ${file.data.filePath!} isn't yet tracked by git, dates will be inaccurate`,
>>>>>>> main
                    ),
                  )
                }
              }
            }

            file.data.dates = {
              created: coerceDate(fp, created),
              modified: coerceDate(fp, modified),
              published: coerceDate(fp, published),
            }
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    dates: {
      created: Date
      modified: Date
      published: Date
    }
  }
}
