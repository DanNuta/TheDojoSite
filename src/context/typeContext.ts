import { Dispatch } from "react";

enum AuthAction {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  AUTH_IS_READY = "AUTH_IS_READY",
}

export interface AuthActionContext {
  type: AuthAction;
  payload: string | null;
}

export interface Auth {
  user: string | null;
  authIsReady: boolean;
}

export interface AuthContextType extends Auth {
  updateData: (item: AuthActionContext) => void;
}
