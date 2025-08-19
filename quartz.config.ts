import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
<<<<<<< HEAD
 * Quartz 4.0 Configuration
=======
 * Quartz 4 Configuration
>>>>>>> main
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
<<<<<<< HEAD
    pageTitle: "☠️ wiki.tiffs.dev",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "pt-BR",
    baseUrl: "wiki.tiffs.dev",
    ignorePatterns: ["_journal", "_personal", "_templates", ".obsidian"],
=======
    pageTitle: "cultivating chaos ☠️",
    pageTitleSuffix: " | wiki.tiffs.dev",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "wiki.tiffs.dev",
    ignorePatterns: ["private", "_templates", ".obsidian", "_files", ".trash", ".stfolder"],
>>>>>>> main
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
<<<<<<< HEAD
        header: "Georgia",
        body: "Tahoma",
=======
        header: "Urbanist",
        body: "Urbanist",
>>>>>>> main
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
<<<<<<< HEAD
          secondary: "deeppink",
          tertiary: "pink",
          highlight: "rgba(143, 159, 169, 0.15)",
=======
          secondary: "#Ff1493",
          tertiary: "#FFC0CB",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#FFC0CB",
>>>>>>> main
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
<<<<<<< HEAD
          secondary: "deeppink",
          tertiary: "pink",
          highlight: "rgba(143, 159, 169, 0.15)",
=======
          secondary: "#Ff1493",
          tertiary: "#FFC0CB",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#FFC0CB",
>>>>>>> main
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
<<<<<<< HEAD
        priority: ["git"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
=======
        priority: ["frontmatter", "git", "filesystem"],
      }),
>>>>>>> main
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
<<<<<<< HEAD
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({showByDefault: true}),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
=======
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
     }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", externalLinkIcon: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
>>>>>>> main
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
<<<<<<< HEAD
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
=======
        rssFullHtml: true,
      }), 
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
      Plugin.ComponentResources(),
>>>>>>> main
    ],
  },
}

export default config
