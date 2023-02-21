import { VInputTextLogin, VInputPasswordLogin, VButton, VFormBox } from "../../components";
import * as Style from "./Login.style";
import { LoginType } from "./type";
import { icons } from "../../assets";

export const LoginView: React.FC<LoginType> = (props: LoginType) => {
  return (
    <Style.Container>

     <VFormBox title="Log in" onHandle={props.submit}>
      <VInputTextLogin
        bottom="15px"
        icon={icons.email}
        title="E-Mail"
        type="text"
        ref={props.email}
        error={props.error}
      />
      <VInputPasswordLogin 
        bottom="24px" 
        title="Password" 
        ref={props.password}
        error={props.error}
         />
      <VButton 
        error={props.error} 
        title="CLick" 
        />
     </VFormBox>


    
   
    </Style.Container>
  );
};
