import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import rehypeReact from "rehype-react"
import ProjectImage from "../components/portfolio/ProjectImage"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "project-image": ProjectImage }
}).Compiler


export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <div>
        <h1 css={css`text-align: center;`}>{post.frontmatter.title}</h1>
        <Img
          css={css`
            width: 225px;
            height: 225px;
            margin: auto;
          `}
          fluid={featuredImgFluid} 
        />

        <div>{renderAst(post.htmlAst)}</div>
      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`