import React from "react";

export interface InputType {
  title: string;
  type?: string;
  bottom?: string,
  icon?: React.ReactNode;
  error: number | null;
  onHandler: () => void
}



interface Input{
  title: string,
  error: number | null,
  bottom?: string
}


export interface InputTextLoginRef extends Input{
  type: string,
  icon: React.ReactNode,
}


export interface InputPasswordLoginRef extends Input{
}




export interface InputTextSignUp extends Input{
  onHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  icon: React.ReactNode,
  type: string,
  errorText?: string | null
}

export interface InputPasswordSignUp extends Input {
  onHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


