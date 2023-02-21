import { VInputPasswordSignUp, 
         VInputTextSignUp, 
         VFormBox,
         VButton
         } from "../../components";
import { icons } from "../../assets";
import { SignUpType } from "./type";

export const SignUpView: React.FC<SignUpType> = (props) => {

    return (
        <VFormBox title="Sign Up" onHandle={props.onSubmit}>
           
            <VInputTextSignUp 
               title="Email" 
               type="text" 
               error={0}
               icon={icons.email} 
               onHandler={props.onEmailHandler}
               bottom="15px"
                />
            <VInputPasswordSignUp 
              title="Password" 
              error={0}
              onHandler={props.onPasswordHandler}
              bottom="15px"
               />

             <VInputTextSignUp 
               title="Display name" 
               type="text" 
               error={0} 
               icon={icons.person} 
               onHandler={props.onNameHandler}
               bottom="15px"
                />


             <VInputTextSignUp 
               title="Avatar" 
               type="file" 
               error={0} 
               errorText={props.errorFile}
               icon={icons.file} 
               onHandler={props.onFileHandler}
               bottom="15px"
                />


                <VButton 
                   title="Sign Up"
                   error={0}
                    />
       
        </VFormBox>
    )
}