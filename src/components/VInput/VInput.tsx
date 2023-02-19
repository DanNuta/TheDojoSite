import { InputType } from "./type";
import * as Style from "./VInput.style";
import { useRef } from "react";
import React from "react";
import { VHideShowPassword } from "../VHideShowPassword/VHideShowPassword";
import { useState } from "react";
import { icons } from "../../assets";

export const VInputText = React.forwardRef<HTMLInputElement, InputType>(
  (props, ref) => {
    return (
      <Style.Container>

        <Style.LabelStyle htmlFor={props.title}>{props.title}</Style.LabelStyle>
        <Style.Div>
          <Style.InputStyle id={props.title} type={props.type} ref={ref} />
          <Style.IconStyle>{props.icon}</Style.IconStyle>
        </Style.Div>

      </Style.Container>
    );
  }
);




export const VInputPassword = React.forwardRef<HTMLInputElement, InputType>(
  (props, ref) => {
    const [hideShowPassword, setHideShowPassword] = useState<boolean>(false);

    function showHidePassword(): void {
      setHideShowPassword((prev) => !prev);
    }

    return (
      <Style.Container>
        <Style.LabelStyle htmlFor={props.title}>{props.title}</Style.LabelStyle>
       
       <Style.Div>
        <Style.InputStyle
          id={props.title}
          type={hideShowPassword ? "text" : "password"}
          ref={ref}
        />

        {
          <VHideShowPassword
            state={hideShowPassword}
            onHandler={showHidePassword}
          />
        }


       </Style.Div>

      </Style.Container>
    );
  }
);
