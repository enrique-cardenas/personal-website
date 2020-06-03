import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../../utils/typography"


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

  console.log("ProjectImage props", props)

  return (
    <div css={projectContainer}>
      <div css={imageContainer}>
        <img src={props.src} srcSet={props.srcSet} />
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