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
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`
const navbarRightResponsive = css`
  float: none;
  @media only screen and (min-width: 768px) {
    ${navbarRight};
  }
`
const navbarItem = css`
  display: none;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    padding-right: 15px;
    color: gray;
    &:hover {
      color: black;
    }
  }
`
const navbarItemResponsive = css`
  color: gray;
  display: block;
  float: none;
  padding-bottom: 15px;
  text-align: left;
  &:hover {
    color: black;
  }
  @media only screen and (min-width: 768px) {
    ${navbarItem}
  }
`
const navbarIcon = css`
  color: gray;

  @media (min-width: 768px) {
    display: none;
  }
`
const navbarIconResponsive = css`
  ${navbarIcon}
  color: black;
  position: absolute;
  top: 1em;
  right: 0;
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
