import * as Style from "./VButton.style";
import { ButtonType } from "./type";

export const VButton: React.FC<ButtonType> = (props: ButtonType) => {
  return <Style.ButtonStyle onClick={props.onClick}>Click</Style.ButtonStyle>;
};
