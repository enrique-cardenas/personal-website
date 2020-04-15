import React from "react"
import Layout from "../components/layout"
import BlogList from '../components/bloglist'

export default ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <BlogList />
    </Layout>
  )
}