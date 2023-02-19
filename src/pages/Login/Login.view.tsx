import { VInputText, VInputPassword, VButton } from "../../components";
import * as Style from "./Login.style";
import { LoginType } from "./type";
import { icons } from "../../assets";

export const LoginView: React.FC<LoginType> = (props: LoginType) => {
  return (
    <Style.FormStyle onSubmit={props.submit}>
      <VInputText
        icon={icons.email}
        title="email"
        type="text"
        ref={props.email}
      />
      <VInputPassword title="password" type="password" ref={props.password} />
      <VButton title="CLick" />
    </Style.FormStyle>
  );
};
