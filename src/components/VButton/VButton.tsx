import * as Style from "./VButton.style";
import { ButtonType } from "./type";
import { icons } from "../../assets";

export const VButton: React.FC<ButtonType> = (props: ButtonType) => {
  return (<Style.ButtonStyle onClick={props.onClick}>
              {(props.error === 0 && icons.cancel) ||
              (props.error === 1 && icons.verify) ||
              props.error === null && "Click"
              }
    </Style.ButtonStyle>)
};
