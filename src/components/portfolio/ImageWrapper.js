import React from "react"
import { css } from "@emotion/core"

const imageCSS = css`
  width: 298px;
  height: 200px;
  margin-bottom: 0px;
`

const ImageWrapper = (props) => {
  const src = require(`../../images/${props.src}`)
  return(
    <div>
      <img css={imageCSS} src={src} alt={props.alt1} />
    </div>
)
}
  

export default ImageWrapper