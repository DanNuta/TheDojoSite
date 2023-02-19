import { VInput, VButton } from "../../components";
import * as Style from "./Login.style";
import { LoginType } from "./type";
import {icons} from "../../assets"

export const LoginView: React.FC<LoginType> = (props: LoginType) => {
  return (
    <Style.FormStyle onSubmit={props.submit}>
      <VInput icon={icon.email} title="email" type="text" ref={props.email} />
      <VInput title="password" type="password" ref={props.password} />
      <VButton title="CLick" />
    </Style.FormStyle>
  );
};
