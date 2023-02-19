import { LoginView } from "./Login.view";
import { useState, useRef } from "react";
import React from "react";

export const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);


  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);



  function submitData(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    console.log(emailRef.current)
    console.log(passwordRef.current)

  }

  return (
    <LoginView
      submit={submitData}
      email={emailRef}
      password={passwordRef}
    />
  );
};
