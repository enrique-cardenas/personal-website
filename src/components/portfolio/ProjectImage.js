import React from "react"
import { css } from "@emotion/core"

const projectContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: .5em;
  
  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`
const imageContainer = css`
  flex: 0 0 150px;
`
const contentContainer = css`
  text-align: center;
  padding-left: 10px;
  padding-top: 3px;
`

const ProjectImage = (props) => {
  return (
    <div css={projectContainer}>
      <div css={imageContainer}>
        <img src={props.src} alt={props.title}/>
      </div>
      <div css={contentContainer}>
        <h3>
          {props.title}
        </h3>
        <a href={props.link}>{props.linkdescription}</a>
      </div>
    </div>
  )
}

export default ProjectImage