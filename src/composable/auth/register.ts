import { reactive,ref } from "vue";
import  useAuth  from "./auth.js"
import { RegisterErrors, RegisterForm } from "../../interfaces/auth/register.interface.js";

export default function useRegister() {
    const auth = useAuth()
    const errors = ref<RegisterErrors>({});
    const registerForm = reactive<RegisterForm>({
        name:"",
        email : "" ,
        password : "",
        password_confirmation : "",
    });

    const handleSubmit = () => {
        errors.value ={}
        return window.axios.post("auth/register",registerForm)
            .then((response)=>{
                auth.login(response.data.access_token)
            })
            .catch((error) => {
                if (error.response.status === 422) {
                  errors.value = error.response.data.errors;
                }
              })
            .finally(() => {
                registerForm.password = "";
            });
    }

    return{
        registerForm,
        handleSubmit,
        errors
    }
}