import { QuartzFilterPlugin } from "../types"

export const RemoveDrafts: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveDrafts",
  shouldPublish(_ctx, [_tree, vfile]) {
<<<<<<< HEAD
    const draftFlag: boolean = vfile.data?.frontmatter?.draft ?? false
=======
    const draftFlag: boolean =
      vfile.data?.frontmatter?.draft === true || vfile.data?.frontmatter?.draft === "true"
>>>>>>> main
    return !draftFlag
  },
})
