import { QuartzFilterPlugin } from "../types"

export const ExplicitPublish: QuartzFilterPlugin = () => ({
  name: "ExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
<<<<<<< HEAD
    return vfile.data?.frontmatter?.publish ?? false
=======
    return vfile.data?.frontmatter?.publish === true || vfile.data?.frontmatter?.publish === "true"
>>>>>>> main
  },
})
