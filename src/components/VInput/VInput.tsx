import { InputTextLoginRef, 
         InputPasswordLoginRef, 
         InputTextSignUp,
         InputPasswordSignUp
        } from "./type";
import * as Style from "./VInput.style";
import React from "react";
import { VHideShowPassword } from "../VHideShowPassword/VHideShowPassword";
import { useState } from "react";
import { icons } from "../../assets";

export const VInputTextLogin = React.forwardRef<HTMLInputElement, InputTextLoginRef>(
  (props, ref) => {
    return (
      <Style.Container bottom={props.bottom}>

        <Style.LabelStyle htmlFor={props.title}>{props.title}</Style.LabelStyle>
        <Style.Div>
          <Style.InputStyle error={props.error} id={props.title} type={props.type} ref={ref} />
          <Style.IconStyle>{props.icon}</Style.IconStyle>
        </Style.Div>

      </Style.Container>
    );
  }
);




export const VInputPasswordLogin = React.forwardRef<HTMLInputElement, InputPasswordLoginRef>(
  (props, ref) => {
    const [hideShowPassword, setHideShowPassword] = useState<boolean>(false);

    function showHidePassword(): void {
      setHideShowPassword((prev) => !prev);
    }

    return (
      <Style.Container bottom={props.bottom}>
        <Style.LabelStyle htmlFor={props.title}>{props.title}</Style.LabelStyle>
       
       <Style.Div>
        <Style.InputStyle
          error={props.error}
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





export const VInputPasswordSignUp: React.FC<InputPasswordSignUp> = (props) => {
    const [hideShowPassword, setHideShowPassword] = useState<boolean>(false);

    function showHidePassword(): void {
      setHideShowPassword((prev) => !prev);
    }

    return (
      <Style.Container bottom={props.bottom}>
        <Style.LabelStyle htmlFor={props.title}>{props.title}</Style.LabelStyle>
       
       <Style.Div>
        <Style.InputStyle
          error={props.error}
          id={props.title}
          type={hideShowPassword ? "text" : "password"}
          onChange={props.onHandler}
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






  export const VInputTextSignUp: React.FC<InputTextSignUp> = (props) => {
      return (
        <Style.Container bottom={props.bottom}>
  
          <Style.LabelStyle htmlFor={props.title}>{props.title}</Style.LabelStyle>
          <Style.Div>
            <Style.InputStyle 
               error={props.error} 
               id={props.title} 
               type={props.type}
               onChange={props.onHandler}
               />
            <Style.IconStyle>{props.icon}</Style.IconStyle>
          </Style.Div>
            {props.errorText && <p>{props.errorText}</p>}
  
        </Style.Container>
      );
    }



