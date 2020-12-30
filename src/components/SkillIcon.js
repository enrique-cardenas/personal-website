import React from "react"
import { IconContext } from "react-icons";
import { css } from "@emotion/core"

const IconContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;
`

export default React.forwardRef((props, ref) => {
  
  if(props.icon){
    const Icon = props.icon

    return (
      <div css={IconContainer}>
        <IconContext.Provider value={{ size: "5em" }}>
          <Icon />
        </IconContext.Provider>
        <p>{props.name}</p>
      </div>
    )
  }

  if(ref){
    return (
      <div css={IconContainer} ref={ref}>
        <img src={props.src} alt={props.alt} css={css` height: 5em; width: 5em;`}/>
        <p>{props.name}</p>
      </div>
    )
  }

  return (
    <div css={IconContainer}>
      <img src={props.src} alt={props.alt} css={css` height: 5em; width: 5em;`}/>
      <p>{props.name}</p>
    </div>
  )
})