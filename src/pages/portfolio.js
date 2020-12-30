import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/layout"
import Projects from "../components/Projects"

export default ({ data }) => (
  <Layout>
    <SEO/> 
    <h1>Portfolio</h1>
    <Projects />
  </Layout>
)
