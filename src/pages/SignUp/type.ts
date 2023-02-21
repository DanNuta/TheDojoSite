export  interface SignUpType {
    onEmailHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onNameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onPasswordHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onFileHandler: (e: any) => void,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    // errorEmail: string,
    // errorName: string,
    // errorPassword: string,
       errorFile: string | null
    // emailValue: string,
    // numeValue: string,
    // passwordValue: string,

}



export interface StateSignUp {
    email: string | null,
    password: string | null,
    file: string | null,
    name: string | null,
    errorfile: string | null
}


export enum TypeReducer {
    EMAIL = "EMAIL",
    PASSWORD = "PASSWORD",
    FILE = "FILE",
    NAME = "NAME",
    FILEERROR = "ERRORFILE"
}


export interface Action {
    type: TypeReducer,
    payload: string
}