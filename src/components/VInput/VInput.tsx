import { InputType } from "./type";
import * as Style from "./VInput.style";
import { useRef } from "react";
import React from "react";


export const VInput = React.forwardRef<HTMLInputElement, InputType>((props, ref) => {
  return (
    <Style.Container>
      <Style.LabelStyle htmlFor={props.title}>{props.title}</Style.LabelStyle>
      <Style.InputStyle
        id={props.title}
        type={props.type}
        ref={ref}
      />
    </Style.Container>
  )
}
)