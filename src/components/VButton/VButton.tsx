import * as Style from "./VButton.style";
import { ButtonType } from "./type";
import { icons } from "../../assets";

export const VButton: React.FC<ButtonType> = (props: ButtonType) => {
  return <Style.ButtonStyle onClick={props.onClick}>Click</Style.ButtonStyle>;
};
