export interface RegisterErrors {
    [key:string]:string
}

export interface RegisterForm {
    name:string,
    email:string,
    password:string,
    password_confirmation:string
}