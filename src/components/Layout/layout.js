import React from "react"
import { css } from "@emotion/core"

import Header from './Header'
import Footer from './Footer'

const layoutStyle = css`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  
  margin: 0 auto;
  max-width: 700px;
  padding: 2em;
  padding-bottom: .25;
  padding-top: 1.5em;
`


export default ({ children }) => {
  return (
    <div
      css={layoutStyle}
    >
      <Header />
      <main 
        css={css`
          flex-grow: 1;
          padding-bottom: 3em;
        `}
      > 
        {children}
      </main>

      <Footer />

    </div>
  )
}