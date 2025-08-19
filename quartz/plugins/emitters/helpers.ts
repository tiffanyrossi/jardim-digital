import path from "path"
import fs from "fs"
import { BuildCtx } from "../../util/ctx"
import { FilePath, FullSlug, joinSegments } from "../../util/path"
<<<<<<< HEAD
=======
import { Readable } from "stream"
>>>>>>> main

type WriteOptions = {
  ctx: BuildCtx
  slug: FullSlug
  ext: `.${string}` | ""
<<<<<<< HEAD
  content: string | Buffer
=======
  content: string | Buffer | Readable
>>>>>>> main
}

export const write = async ({ ctx, slug, ext, content }: WriteOptions): Promise<FilePath> => {
  const pathToPage = joinSegments(ctx.argv.output, slug + ext) as FilePath
  const dir = path.dirname(pathToPage)
  await fs.promises.mkdir(dir, { recursive: true })
  await fs.promises.writeFile(pathToPage, content)
  return pathToPage
}
