import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"


const projectContainer = css`
  display: flex;
  flex-direction: column; 
  align-items: stretch;
  
  margin-bottom: .5em;
  
  @media (min-width: 768px) {
    flex-direction: row; 
    align-items: center;
  }
`
const imageContainer = css`
  flex: 0 0 150px;
`
const contentContainer = css`
  padding-left: 10px;
  padding-top: 3px;
  h3 {
    margin-bottom: .25em;
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
                order
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
  const projects = data.allMarkdownRemark.edges.filter(({ node }) =>  node.fields.slug.includes('/projects/'))
    .sort((a, b) => b.node.frontmatter.order - a.node.frontmatter.order)

  return (
    <div>
        {projects.map(({ node }) => (
        <div key={node.id} >
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