import {
  useState,
  useReducer,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";
import { auth } from "../firebase/config";
import { Auth, AuthActionContext, AuthContextType } from "./typeContext";

const dataGeneralState: Auth = {
  user: null,
  authIsReady: false,
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function authReducer(state: Auth, action: AuthActionContext) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
      break;
    case "LOGOUT":
      return { ...state, user: action.payload, authIsReady: true };
      break;
    case "AUTH_IS_READY":
      return { ...state, user: null };
    default:
      return state;
  }
}

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispach] = useReducer(authReducer, dataGeneralState);

  function updateData(item: AuthActionContext) {
    dispach({ type: item.type, payload: item.payload });
  }

  useEffect(() => {
    const sub = auth.onAuthStateChanged((user) => {
      console.log(sub());
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, updateData }}>
      {children}
    </AuthContext.Provider>
  );
};
