import React from "react"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"
import Header from './header'
import Footer from './footer'


export default ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-bottom: ${rhythm(.25)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Header />
      <main 
        css={css`
          flex-grow: 1;
          padding-bottom: ${rhythm(3)};
        `}
      > 
        {children}
      </main>

      <Footer />

    </div>
  )
}