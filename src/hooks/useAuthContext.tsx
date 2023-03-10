import { AuthContext } from "../context/Auth.Context";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
