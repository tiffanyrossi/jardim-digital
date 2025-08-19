<<<<<<< HEAD
document.addEventListener("themechange", (e) => {
    const theme = e.detail.theme === 'light' ?  'light_protanopia' : 'dark_protanopia'
  
    function sendMessage(message: { setConfig: { theme: string } }) {
      const iframe = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement;
      if (!iframe) return;
      iframe.contentWindow?.postMessage({ giscus: message }, 'https://giscus.app');
    }
  
    sendMessage({
      setConfig: {
        theme: theme
      }
    });
  })
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
    const currentTheme = localStorage.getItem("theme") ?? userPref
    if (currentTheme === "dark") {return} // default is dark theme
  
    const theme = currentTheme === "light" ? "light_protanopia" : "dark_protanopia"
  
    const existingGiscusContainer = document.getElementById('giscus-container');
  
    if (existingGiscusContainer) {
      // Remove the existing Giscus instance
      existingGiscusContainer.innerHTML = '';
    }
  
    // Create a new container element for Giscus
    const newGiscusContainer = document.createElement('div');
    newGiscusContainer.id = 'giscus-container';
    document.body.appendChild(newGiscusContainer);
  
    // Create a new script element with the updated data-theme attribute
    const newScript = document.createElement('script');
    newScript.src = 'https://giscus.app/client.js';
    newScript.setAttribute('data-repo', 'tiffanyrossi/jardim-digital');
    newScript.setAttribute('data-repo-id', 'R_kgDOL12fmQ');
    newScript.setAttribute('data-category', 'General');
    newScript.setAttribute('data-category-id', 'DIC_kwDOL12fmc4Cfzr2');
    newScript.setAttribute('data-mapping', 'pathname');
    newScript.setAttribute('data-strict', '0');
    newScript.setAttribute('data-reactions-enabled', '1');
    newScript.setAttribute('data-emit-metadata', '0');
    newScript.setAttribute('data-input-position', 'top');
    newScript.setAttribute('data-theme', theme);
    newScript.setAttribute('data-lang', 'pt');
    newScript.setAttribute('crossOrigin', 'anonymous');
    newScript.async = true;
  
    // Append the new script to the Giscus container
    newGiscusContainer.appendChild(newScript);
  })
=======
const changeTheme = (e: CustomEventMap["themechange"]) => {
  const theme = e.detail.theme
  const iframe = document.querySelector("iframe.giscus-frame") as HTMLIFrameElement
  if (!iframe) {
    return
  }

  if (!iframe.contentWindow) {
    return
  }

  iframe.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          theme: getThemeUrl(getThemeName(theme)),
        },
      },
    },
    "https://giscus.app",
  )
}

const getThemeName = (theme: string) => {
  if (theme !== "dark" && theme !== "light") {
    return theme
  }
  const giscusContainer = document.querySelector(".giscus") as GiscusElement
  if (!giscusContainer) {
    return theme
  }
  const darkGiscus = giscusContainer.dataset.darkTheme ?? "dark"
  const lightGiscus = giscusContainer.dataset.lightTheme ?? "light"
  return theme === "dark" ? darkGiscus : lightGiscus
}

const getThemeUrl = (theme: string) => {
  const giscusContainer = document.querySelector(".giscus") as GiscusElement
  if (!giscusContainer) {
    return `https://giscus.app/themes/${theme}.css`
  }
  return `${giscusContainer.dataset.themeUrl ?? "https://giscus.app/themes"}/${theme}.css`
}

type GiscusElement = Omit<HTMLElement, "dataset"> & {
  dataset: DOMStringMap & {
    repo: `${string}/${string}`
    repoId: string
    category: string
    categoryId: string
    themeUrl: string
    lightTheme: string
    darkTheme: string
    mapping: "url" | "title" | "og:title" | "specific" | "number" | "pathname"
    strict: string
    reactionsEnabled: string
    inputPosition: "top" | "bottom"
    lang: string
  }
}

document.addEventListener("nav", () => {
  const giscusContainer = document.querySelector(".giscus") as GiscusElement
  if (!giscusContainer) {
    return
  }

  const giscusScript = document.createElement("script")
  giscusScript.src = "https://giscus.app/client.js"
  giscusScript.async = true
  giscusScript.crossOrigin = "anonymous"
  giscusScript.setAttribute("data-loading", "lazy")
  giscusScript.setAttribute("data-emit-metadata", "0")
  giscusScript.setAttribute("data-repo", giscusContainer.dataset.repo)
  giscusScript.setAttribute("data-repo-id", giscusContainer.dataset.repoId)
  giscusScript.setAttribute("data-category", giscusContainer.dataset.category)
  giscusScript.setAttribute("data-category-id", giscusContainer.dataset.categoryId)
  giscusScript.setAttribute("data-mapping", giscusContainer.dataset.mapping)
  giscusScript.setAttribute("data-strict", giscusContainer.dataset.strict)
  giscusScript.setAttribute("data-reactions-enabled", giscusContainer.dataset.reactionsEnabled)
  giscusScript.setAttribute("data-input-position", giscusContainer.dataset.inputPosition)
  giscusScript.setAttribute("data-lang", giscusContainer.dataset.lang)
  const theme = document.documentElement.getAttribute("saved-theme")
  if (theme) {
    giscusScript.setAttribute("data-theme", getThemeUrl(getThemeName(theme)))
  }

  giscusContainer.appendChild(giscusScript)

  document.addEventListener("themechange", changeTheme)
  window.addCleanup(() => document.removeEventListener("themechange", changeTheme))
})
>>>>>>> main
