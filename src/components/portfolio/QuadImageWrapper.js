import React from "react"
import { css } from "@emotion/core"

const quadImageContainer = css`
  display: flex; 
  flex-wrap: wrap; 
`
const imageCSS = css`
  width: 298px;
  height: 200px;
`
const QuadImageWrapper = (props) => {
  const src1 = require(`../../images/${props.src1}`)
  const src2 = require(`../../images/${props.src2}`)
  const src3 = require(`../../images/${props.src3}`)
  const src4 = require(`../../images/${props.src4}`)

  return (
    <div css={quadImageContainer}>
      <img css={imageCSS} src={src1} alt={props.alt1} />
      <img css={imageCSS} src={src2} alt={props.alt2} />
      <img css={imageCSS} src={src3} alt={props.alt3} />
      <img css={imageCSS} src={src4} alt={props.alt4} />
    </div>
  )
}

export default QuadImageWrapper