import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/layout"
import BlogList from '../components/BlogList'

export default ({ data }) => {
  return (
    <Layout>
      <SEO/>
      <h1>Blog</h1>
      <BlogList />
    </Layout>
  )
}