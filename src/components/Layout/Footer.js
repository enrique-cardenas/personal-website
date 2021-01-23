import React from "react"
import { css } from "@emotion/core"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

  return (
    <footer 
      css={css`
        display: flex;
        svg {
          height: 1.75em;
          width: 1.75em;
          position: relative;
          top: -.5em;
        }

        a {
          color: black;
          padding-right: 10px;
        }
      `}
    >
      <div
        css={css`
          flex-grow: 1;
        `}
      >
        © Enrique Cardenas
      </div>  
      <div
        css={css`
          flex-grow: 2;
        `}
      >
        <a href="https://github.com/enrique-cardenas"
        target="_blank" rel="noopener noreferrer" aria-label="github">
          <FaGithub/>
        </a>
        
        {' '}

        <a href="https://www.linkedin.com/in/enrique-cardenas/"
          target="_blank" rel="noopener noreferrer" aria-label="linkedin">
        <FaLinkedin />
        </a>
        
      </div>       
    </footer>
  )
}

export default Footer