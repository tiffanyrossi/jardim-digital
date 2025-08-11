import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "sem título",
    description: "sem descrição",
  },
  components: {
    callout: {
      note: "nota",
      abstract: "abstrato",
      info: "info",
      todo: "to-do",
      tip: "dica",
      success: "sucesso",
      question: "dúvida",
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
    readerMode: {
      title: "modo leitor",
    },
    explorer: {
      title: "assuntos",
    },
    footer: {
      createdWith: "criado com",
    },
    graph: {
      title: "Visão de gráfico",
    },
    recentNotes: {
      title: "notas recentes",
      seeRemainingMore: ({ remaining }) => `veja mais ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `transcrever de ${targetSlug}`,
      linkToOriginal: "link ao original",
    },
    search: {
      title: "pesquisar",
      searchBarPlaceholder: "pesquisar por algo",
    },
    tableOfContents: {
      title: "sumário",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `leitura de ${minutes} min`,
    },
  },
  pages: {
    rss: {
      recentNotes: "notas recentes",
      lastFewNotes: ({ count }) => `últimas ${count} notas`,
    },
    error: {
      title: "não encontrado",
      notFound: "esta página é privada ou não existe.",
      home: "retornar a página inicial",
    },
    folderContent: {
      folder: "arquivo",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item neste arquivo." : `${count} items neste arquivo.`,
    },
    tagContent: {
      tag: "tag",
      tagIndex: "sumário de tags",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item com esta tag." : `${count} items com esta tag.`,
      showingFirst: ({ count }) => `mostrando as ${count} primeiras tags.`,
      totalTags: ({ count }) => `encontradas ${count} tags.`,
    },
  },
} as const satisfies Translation
