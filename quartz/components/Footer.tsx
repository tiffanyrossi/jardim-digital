import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
<<<<<<< HEAD
        <hr />
        <p>
          {i18n(cfg.locale).components.footer.credits} © {year} 🤍 {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/" target="_blank">quartz v{version}</a>
=======
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
>>>>>>> main
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
<<<<<<< HEAD
              <a href={link} target="_blank" rel="me">{text}</a>
=======
              <a href={link}>{text}</a>
>>>>>>> main
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
<<<<<<< HEAD
  
  // code for giscus comments (place inside footer element):
  // <hr />
  // <div class="giscus"></div>

=======
>>>>>>> main
  return Footer
}) satisfies QuartzComponentConstructor
