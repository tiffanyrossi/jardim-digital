import { QuartzTransformerPlugin } from "../types"
import rehypePrettyCode, { Options as CodeOptions, Theme as CodeTheme } from "rehype-pretty-code"

interface Theme extends Record<string, CodeTheme> {
  light: CodeTheme
  dark: CodeTheme
}

interface Options {
  theme?: Theme
  keepBackground?: boolean
}

const defaultOptions: Options = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  keepBackground: false,
}

<<<<<<< HEAD
export const SyntaxHighlighting: QuartzTransformerPlugin<Options> = (
  userOpts?: Partial<Options>,
) => {
  const opts: Partial<CodeOptions> = { ...defaultOptions, ...userOpts }
=======
export const SyntaxHighlighting: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts: CodeOptions = { ...defaultOptions, ...userOpts }
>>>>>>> main

  return {
    name: "SyntaxHighlighting",
    htmlPlugins() {
      return [[rehypePrettyCode, opts]]
    },
  }
}
