import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/Layout/layout"
import BlogList from '../components/BlogList'
import SEO from "../components/seo"


export default ({ data }) => {
  return (
    <Layout>
      <SEO />
      <div>
        <p>Hi, my name is Enrique and welcome to my website. </p>
        
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Blog Posts
        </h1>
        <BlogList />
      </div>
    </Layout>
  )
}