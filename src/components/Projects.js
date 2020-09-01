import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"

const projectContainer = css`
  display: flex;
  margin-bottom: .5em;
`
const imageContainer = css`
  flex: 0 0 150px;
`
const contentContainer = css`
  padding-left: 10px;
  padding-top: 3px;
  h3 {
    margin-bottom: ${rhythm(1 / 4)};
  }
`

const Projects = ({ children }) => {

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id
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
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  )
  const projects = data.allMarkdownRemark.edges.filter(({ node }) =>  node.fields.slug.includes('/projects/')).reverse()

  return (
    <div>
      {projects.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <div css={projectContainer}>
              <div css={imageContainer}>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
              </div>
              <div css={contentContainer}>
                <h3>
                  {node.frontmatter.title}
                </h3>
                <p>{node.excerpt}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Projects