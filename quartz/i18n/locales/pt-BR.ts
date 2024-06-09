import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "sem título",
    description: "sem descrição",
  },
  components: {
    callout: {
      note: "nota",
      abstract: "resumo",
      info: "info",
      todo: "to-do",
      tip: "dica",
      success: "sucesso",
      question: "pergunta",
      warning: "aviso",
      failure: "falha",
      danger: "perigo",
      bug: "bug",
      example: "exemplo",
      quote: "citação",
    },
    backlinks: {
      title: "backlinks",
      noBacklinksFound: "sem backlinks encontrados",
    },
    themeToggle: {
      lightMode: "tema claro",
      darkMode: "tema escuro",
    },
    explorer: {
      title: "explorador",
    },
    footer: {
      createdWith: "criado com",
      credits: "tiffany rossi",
    },
    graph: {
      title: "visão de gráfico",
    },
    recentNotes: {
      title: "notas recentes",
      seeRemainingMore: ({ remaining }) => `veja mais ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `transcrever de ${targetSlug}`,
      linkToOriginal: "link para o original",
    },
    search: {
      title: "buscar",
      searchBarPlaceholder: "digite um termo para buscar...",
    },
    tableOfContents: {
      title: "índice",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `leitura em ${minutes} min`,
    },
  },
  pages: {
    rss: {
      recentNotes: "notas recentes",
      lastFewNotes: ({ count }) => `últimas ${count} notas`,
    },
    error: {
      title: "ops",
      notFound: "esta página é privada ou ainda não existe.",
    },
    folderContent: {
      folder: "arquivo",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item neste arquivo." : `${count} itens neste arquivo.`,
    },
    tagContent: {
      tag: "tag",
      tagIndex: "tags",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item com esta tag." : `${count} itens com esta tag.`,
      showingFirst: ({ count }) => `mostrando as ${count} primeiras tags.`,
      totalTags: ({ count }) => `${count} tags encontradas.`,
    },
  },
} as const satisfies Translation
