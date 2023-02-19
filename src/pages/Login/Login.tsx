import { LoginView } from "./Login.view";
import { useState, useRef } from "react";
import React from "react";

export const Login: React.FC = () => {
  const [error, setError] = useState<number | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function submitData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(emailRef.current?.value.length && passwordRef.current?.value){
      setError(prev => prev = 1)
    }else{
      setError(prev => prev = 0)
    }

  }

  return (
    <LoginView 
     submit={submitData} 
     email={emailRef} 
     password={passwordRef}
     error={error}
      />
  );
};
