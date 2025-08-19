import { QuartzConfig } from "../cfg"
<<<<<<< HEAD
import { FullSlug } from "./path"
=======
import { QuartzPluginData } from "../plugins/vfile"
import { FileTrieNode } from "./fileTrie"
import { FilePath, FullSlug } from "./path"
>>>>>>> main

export interface Argv {
  directory: string
  verbose: boolean
  output: string
  serve: boolean
<<<<<<< HEAD
  fastRebuild: boolean
=======
  watch: boolean
>>>>>>> main
  port: number
  wsPort: number
  remoteDevHost?: string
  concurrency?: number
}

<<<<<<< HEAD
export interface BuildCtx {
  argv: Argv
  cfg: QuartzConfig
  allSlugs: FullSlug[]
}
=======
export type BuildTimeTrieData = QuartzPluginData & {
  slug: string
  title: string
  filePath: string
}

export interface BuildCtx {
  buildId: string
  argv: Argv
  cfg: QuartzConfig
  allSlugs: FullSlug[]
  allFiles: FilePath[]
  trie?: FileTrieNode<BuildTimeTrieData>
  incremental: boolean
}

export function trieFromAllFiles(allFiles: QuartzPluginData[]): FileTrieNode<BuildTimeTrieData> {
  const trie = new FileTrieNode<BuildTimeTrieData>([])
  allFiles.forEach((file) => {
    if (file.frontmatter) {
      trie.add({
        ...file,
        slug: file.slug!,
        title: file.frontmatter.title,
        filePath: file.filePath!,
      })
    }
  })

  return trie
}

export type WorkerSerializableBuildCtx = Omit<BuildCtx, "cfg" | "trie">
>>>>>>> main
