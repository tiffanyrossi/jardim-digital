import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "sem título",
    description: "sem descrição",
  },
  components: {
    callout: {
      note: "nota",
<<<<<<< HEAD
      abstract: "resumo",
=======
      abstract: "abstrato",
>>>>>>> main
      info: "info",
      todo: "to-do",
      tip: "dica",
      success: "sucesso",
<<<<<<< HEAD
      question: "pergunta",
=======
      question: "dúvida",
>>>>>>> main
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
<<<<<<< HEAD
    explorer: {
      title: "explorador",
    },
    footer: {
      createdWith: "criado com",
      credits: "tiffany rossi",
    },
    graph: {
      title: "visão de gráfico",
=======
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
>>>>>>> main
    },
    recentNotes: {
      title: "notas recentes",
      seeRemainingMore: ({ remaining }) => `veja mais ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `transcrever de ${targetSlug}`,
<<<<<<< HEAD
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
=======
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
>>>>>>> main
    },
  },
  pages: {
    rss: {
      recentNotes: "notas recentes",
      lastFewNotes: ({ count }) => `últimas ${count} notas`,
    },
    error: {
<<<<<<< HEAD
      title: "ops",
      notFound: "esta página é privada ou ainda não existe.",
=======
      title: "não encontrado",
      notFound: "esta página é privada ou não existe.",
      home: "retornar a página inicial",
>>>>>>> main
    },
    folderContent: {
      folder: "arquivo",
      itemsUnderFolder: ({ count }) =>
<<<<<<< HEAD
        count === 1 ? "1 item neste arquivo." : `${count} itens neste arquivo.`,
    },
    tagContent: {
      tag: "tag",
      tagIndex: "tags",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item com esta tag." : `${count} itens com esta tag.`,
      showingFirst: ({ count }) => `mostrando as ${count} primeiras tags.`,
      totalTags: ({ count }) => `${count} tags encontradas.`,
=======
        count === 1 ? "1 item neste arquivo." : `${count} items neste arquivo.`,
    },
    tagContent: {
      tag: "tag",
      tagIndex: "sumário de tags",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item com esta tag." : `${count} items com esta tag.`,
      showingFirst: ({ count }) => `mostrando as ${count} primeiras tags.`,
      totalTags: ({ count }) => `encontradas ${count} tags.`,
>>>>>>> main
    },
  },
} as const satisfies Translation
