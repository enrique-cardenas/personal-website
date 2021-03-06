import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import { css } from "@emotion/core"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
          <h3
            css={css`
              color: #555;
            `}
          >
            {post.frontmatter.date}
          </h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} 
          css={css` .gatsby-resp-image-wrapper { max-width: 600px !important; }`} 
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`