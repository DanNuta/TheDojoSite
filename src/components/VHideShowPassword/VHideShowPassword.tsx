import { icons } from "../../assets";
import { useState } from "react";
import { ShowHidepassword } from "./type";

const iconsPassword = [icons.eyeShow, icons.eyeHidden];

export const VHideShowPassword: React.FC<ShowHidepassword> = (
  props: ShowHidepassword
) => {
  return (
    <>
      {props.state ? (
        <div onClick={props.onHandler}>{iconsPassword[0]}</div>
      ) : (
        <div onClick={props.onHandler}>{iconsPassword[1]}</div>
      )}
    </>
  );
};
