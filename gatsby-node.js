const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
            category
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `)

  result.data.allMdx.nodes.forEach(({ frontmatter: { category, slug } }) => {
    createPage({
      path: `/articles/${category.toLowerCase()}/${slug}`,
      component: path.resolve(`src/templates/article-template.js`),
      context: {
        category,
        slug,
      },
    })
  })
}
