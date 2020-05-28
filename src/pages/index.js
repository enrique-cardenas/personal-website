import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import BlogList from '../components/BlogList'


export default ({ data }) => {
  return (
    <Layout>
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