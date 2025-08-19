import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Без назви",
    description: "Опис не надано",
  },
  components: {
    callout: {
      note: "Примітка",
      abstract: "Абстракт",
      info: "Інформація",
      todo: "Завдання",
      tip: "Порада",
      success: "Успіх",
      question: "Питання",
      warning: "Попередження",
      failure: "Невдача",
      danger: "Небезпека",
      bug: "Баг",
      example: "Приклад",
      quote: "Цитата",
    },
    backlinks: {
      title: "Зворотні посилання",
      noBacklinksFound: "Зворотних посилань не знайдено",
    },
    themeToggle: {
      lightMode: "Світлий режим",
      darkMode: "Темний режим",
    },
<<<<<<< HEAD
=======
    readerMode: {
      title: "Режим читання",
    },
>>>>>>> main
    explorer: {
      title: "Провідник",
    },
    footer: {
      createdWith: "Створено за допомогою",
    },
    graph: {
      title: "Вигляд графа",
    },
    recentNotes: {
      title: "Останні нотатки",
      seeRemainingMore: ({ remaining }) => `Переглянути ще ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Видобуто з ${targetSlug}`,
      linkToOriginal: "Посилання на оригінал",
    },
    search: {
      title: "Пошук",
      searchBarPlaceholder: "Шукати щось",
    },
    tableOfContents: {
      title: "Зміст",
    },
    contentMeta: {
<<<<<<< HEAD
      readingTime: ({ minutes }) => `${minutes} min read`,
=======
      readingTime: ({ minutes }) => `${minutes} хв читання`,
>>>>>>> main
    },
  },
  pages: {
    rss: {
      recentNotes: "Останні нотатки",
      lastFewNotes: ({ count }) => `Останні нотатки: ${count}`,
    },
    error: {
      title: "Не знайдено",
      notFound: "Ця сторінка або приватна, або не існує.",
<<<<<<< HEAD
    },
    folderContent: {
      folder: "Папка",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "У цій папці 1 елемент." : `Елементів у цій папці: ${count}.`,
    },
    tagContent: {
      tag: "Тег",
      tagIndex: "Індекс тегу",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 елемент з цим тегом." : `Елементів з цим тегом: ${count}.`,
      showingFirst: ({ count }) => `Показ перших ${count} тегів.`,
      totalTags: ({ count }) => `Всього знайдено тегів: ${count}.`,
=======
      home: "Повернутися на головну сторінку",
    },
    folderContent: {
      folder: "Тека",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "У цій теці 1 елемент." : `Елементів у цій теці: ${count}.`,
    },
    tagContent: {
      tag: "Мітка",
      tagIndex: "Індекс мітки",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 елемент з цією міткою." : `Елементів з цією міткою: ${count}.`,
      showingFirst: ({ count }) => `Показ перших ${count} міток.`,
      totalTags: ({ count }) => `Всього знайдено міток: ${count}.`,
>>>>>>> main
    },
  },
} as const satisfies Translation
