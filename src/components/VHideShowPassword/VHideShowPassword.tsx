import { icons } from "../../assets";
import { useState } from "react";
import { ShowHidepassword } from "./type";

const iconsPassword = [icons.eyeShow, icons.eyeHidden];

export const VHideShowPassword: React.FC<ShowHidepassword> = (
  props: ShowHidepassword
) => {

  return (
    <div style={{position: "absolute",
    top: "0", 
    bottom: "0", 
    right: "15px",  
    height: "100%",  
    display: "flex", 
    alignItems: "center",
    cursor: "pointer"}}>
      {props.state ? (
        <div onClick={props.onHandler}>{iconsPassword[0]}</div>
      ) : (
        <div onClick={props.onHandler}>{iconsPassword[1]}</div>
      )}
    </div>
  );
};
