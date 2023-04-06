import {  reactive, ref } from "vue"
import  useAuth  from "./auth"
import { LoginErrors, LoginForm } from "../../interfaces/auth/login.interface.js";

export default function useLogin() {
    const auth = useAuth()
    const errors = ref<LoginErrors>({});
    const loginForm  = reactive<LoginForm>({
        email : "" ,
        password : "",
        remember : false
    })

    const handleSubmit = async () =>{
        errors.value ={}
        return window.axios.post("auth/login",loginForm)
            .then((response)=>{
                auth.login(response.data.access_token)
            })
            .catch((error) => {
                if (error.response.status === 422) {
                  errors.value = error.response.data.errors;
                }
              })
            .finally(() => {
                loginForm.password = "";
            });
    }
    return{
        handleSubmit,
        loginForm,
        errors
    }
}