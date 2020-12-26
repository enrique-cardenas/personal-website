import React, { useState } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { FaBars } from "react-icons/fa";


const navbar = css`
  overflow: hidden;
  margin-bottom: 1.5em;

  *:focus {
    outline: 0;
    outline: none;
  }

  svg {
    height: 1.25em;
    width: 1.25em;
    top: .25em;
    position: relative;
  }

  @media (max-width: 600px) {
    position: relative;
  }
`
const navbarRight = css`
  float: right; 
`
const navbarRightResponsive = css`
  ${navbarRight};
  @media (max-width: 600px) {
    float: none;
  }
`
const navbarItem = css`
  padding-right: 15px;
  color: gray;
  &:hover {
    color: black;
  }

  @media (max-width: 600px){
    display: none
  }
`
const navbarItemResponsive = css`
  ${navbarItem}
  @media (max-width: 600px){
    float: none;
    display: block;
    text-align: left;

    color: gray;
    &:hover {
      color: black;
    }
  }
`
const navbarIcon = css`
  display: none;

  @media (max-width: 600px){
    display: block;
    float: right;
    color: gray;
    &:hover {
      color: black;
    }
  }
`
const navbarIconResponsive = css`
  ${navbarIcon}
  @media (max-width: 600px){
    position: absolute;
    top: 0;
    right: 0;
  }
`

const Header = () => {
  const [ toggle, setToggle ] = useState(false)

  const navbarItemCSS = toggle ? navbarItemResponsive : navbarItem
  const navbarRightCSS = toggle ? navbarRightResponsive : navbarRight
  const navbarIconCSS = toggle ? navbarIconResponsive : navbarIcon

  return(
    <header>
        <nav css={navbar} >
          <Link to={`/`} >
            <h3
              css={css`
                display: inline-block;
                color: black;
              `}
            >
              Home
            </h3>
          </Link>
        
          <div css={navbarRightCSS}>
            <Link
              to={`/about/`}
              css={navbarItemCSS}
            >
              About
            </Link>
            <Link
              to={`/portfolio/`}
              css={navbarItemCSS}
            >
              Portfolio
            </Link>
            <Link
              to={`/blog/`}
              css={navbarItemCSS}
            >
              Blog
            </Link>
            <div 
              css={navbarIconCSS}
              onClick={() => setToggle(!toggle)}
              onKeyDown={() => setToggle(!toggle)}
              role='button'
              tabIndex='0'
            >
              <FaBars />
            </div>
          </div>
        </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
