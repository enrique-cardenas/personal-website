import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About Me</h1>
    <p>
      I am a software engineer focusing on full stack development.
      I have recently worked with React, Redux, Node.js, Express, MongoDB, GraphQL, and Jest.

      Links to my github and linkedin accounts can be accessed through their logos at the bottom of the screen.
    </p>

  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`