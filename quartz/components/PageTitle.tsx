import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
<<<<<<< HEAD
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h1>
=======
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>{title}</a>
    </h2>
>>>>>>> main
  )
}

PageTitle.css = `
.page-title {
<<<<<<< HEAD
  margin: 0;
=======
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
>>>>>>> main
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
