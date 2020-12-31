import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
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
  let blogs = data.allMarkdownRemark.edges.filter(({ node }) =>  node.fields.slug.includes('/blog-entries/'))

  return (
    <div>
      <h4>{blogs.length} Posts</h4>
      {blogs.map(({ node }) => (
        <div key={node.id} css={css` margin-bottom: 3em; `}>
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3
              css={css`
                margin-bottom: -.5em;
              `}
            >
              {node.frontmatter.title}{" "}
              <br />
              <span
                css={css`
                  color: #555;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}