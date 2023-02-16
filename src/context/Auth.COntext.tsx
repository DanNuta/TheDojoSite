import {useState, useReducer, useEffect, createContext} from "react";


enum AuthAction {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    AUTH_IS_READY = "AUTH_IS_READY"
};


interface AuthActionContext {
    type: AuthAction,
    payload: string | null
}

interface Auth{
    user: string | null,
    authIsReady: boolean
}

export const AuthContext = createContext(null);


export function authReducer(state: Auth, action: AuthActionContext){
    switch(action.type){
        case "LOGIN": 
          return {...state, user: action.payload};
          break;
        case "LOGOUT":
            return {...state, user: action.payload, authIsReady: true};
            break;
          case "AUTH_IS_READY":
            return {...state, user: null};
            default: 
              return state;
        }
}



const dataGeneralState: Auth = {
    user: null,
    authIsReady: false
}


export function AuthContextProvider(){
    const [state, dispach] = useReducer(authReducer, dataGeneralState)
}