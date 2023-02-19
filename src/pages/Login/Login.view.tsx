import { VInputText, VInputPassword, VButton } from "../../components";
import * as Style from "./Login.style";
import { LoginType } from "./type";
import { icons } from "../../assets";

export const LoginView: React.FC<LoginType> = (props: LoginType) => {
  return (
    <Style.Container>
    <Style.FormStyle onSubmit={props.submit}>
      <Style.h1>Log in</Style.h1>
      <VInputText
        icon={icons.email}
        title="E-Mail"
        type="text"
        ref={props.email}
      />
      <VInputPassword title="Password" type="password" ref={props.password} />
      <VButton title="CLick" />
    </Style.FormStyle>
    </Style.Container>
  );
};
