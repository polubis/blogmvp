import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ArticleTemplate = ({ data }) => {
  console.log(data)
  const {
    mdx: {
      frontmatter: { title, category, image, date },
      body,
    },
  } = data

  return <MDXRenderer>{body}</MDXRenderer>
}

export const query = graphql`
  query GetSingleArticle($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
      }
      body
    }
  }
`

export default ArticleTemplate
