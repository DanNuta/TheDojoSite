import { SignUpView } from "./SignUp.view";
import { ChangeEvent, FormEvent, useReducer } from "react";
import {StateSignUp, Action, TypeReducer} from "./type";



export const SignUp: React.FC = () => {


    const stateObj: StateSignUp = {
        email: null,
        password: null,
        file: null,
        name: null,
        errorfile: null
    }





    function stateFn(state: StateSignUp, action: Action): StateSignUp{

        
        switch(action.type){
            case action.type:
                const type = action.type.toLocaleLowerCase();
                return {...state, [type]: action.payload};
                break;

            default: 
              return state
        }

    }

    const [state, dispach] = useReducer(stateFn, stateObj);
   




    function emailFn(e: ChangeEvent<HTMLInputElement>){
        const value: string = e.target.value;

        dispach({type: TypeReducer.EMAIL, payload: value})
    }


    function numeFn(e: ChangeEvent<HTMLInputElement>){
        const value: string = e.target.value;

        dispach({type: TypeReducer.NAME, payload: value})
    }


    function passwordFn(e: ChangeEvent<HTMLInputElement>){
        const value: string = e.target.value;

        dispach({type: TypeReducer.PASSWORD, payload: value})
    }


    function fileFn(e: any){

        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];

        // if(file!.size > 100000){
        //     dispach({type: TypeReducer.FILEERROR, payload: "Nu trebuie sa depseaza lungimea de 100kb"})
        //     return
        // }
        
        if(!(file!.type.includes("image"))){
            dispach({type: TypeReducer.FILEERROR, payload: "Formatul acceptat trebuie sa fie o imagine"})
            console.log(state)
            return

        }
    }



    function submitData(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(state)
    }


    return (
        <SignUpView
           onEmailHandler={emailFn}
           onNameHandler={numeFn}
           onPasswordHandler={passwordFn}
           onFileHandler={fileFn}
           onSubmit={submitData}
           errorFile={state.errorfile}

          
           
        />
    )
}