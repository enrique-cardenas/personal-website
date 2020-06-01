import React from "react"
import Layout from "../components/layout"
import Projects from '../components/Projects'

export default ({ data }) => (
  <Layout>
    <h1>Portfolio</h1>
    <p>
      Currently working on designing this page but for now here's
      a <a href="https://enriquecardenas.netlify.com/projects/portfolio.html" 
          target="_blank" rel="noopener noreferrer">link</a> to 
      my old website's portfolio page. I also have some more proejcts in my {' '}
      <a href="https://github.com/enrique-cardenas"
        target="_blank" rel="noopener noreferrer">github</a>.
    </p>

    <Projects />
  </Layout>
)
