import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

/**
const projectContainer = css`
  border-radius: .5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  p {
    font-size: .9em;
  }
`

*/

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
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #555;
                `}
              >
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Projects