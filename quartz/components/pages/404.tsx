import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
<<<<<<< HEAD
=======
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

>>>>>>> main
  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
<<<<<<< HEAD

      <a href="/">voltar para o início.</a>
=======
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
>>>>>>> main
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
