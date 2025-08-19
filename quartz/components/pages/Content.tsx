<<<<<<< HEAD
=======
import { ComponentChildren } from "preact"
>>>>>>> main
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
<<<<<<< HEAD
  const content = htmlToJsx(fileData.filePath!, tree)
=======
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
>>>>>>> main
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>{content}</article>
}

export default (() => Content) satisfies QuartzComponentConstructor
