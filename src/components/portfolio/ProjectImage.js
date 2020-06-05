import React from "react"
import { css } from "@emotion/core"

const projectContainer = css`
  display: flex;
  margin-bottom: .5em;
`
const imageContainer = css`
  flex: 0 0 150px;
`
const contentContainer = css`
  padding-left: 10px;
  padding-top: 3px;
`

const ProjectImage = (props) => {
  return (
    <div css={projectContainer}>
      <div css={imageContainer}>
        <img src={props.src} srcSet={props.srcSet} alt={props.title}/>
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