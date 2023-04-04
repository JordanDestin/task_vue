export interface LoginErrors {
    [key: string]: string[];
  }
  
  export interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
  }