import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core";

export default function useAuth() {
    const router = useRouter();
    const accessToken = useStorage("acces_token", "")
    
    function setAccessToken(value : string | null): void {
        accessToken.value = value;
        window.axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken.value}`;
      }
    
      function login(accessToken: string): void {
        setAccessToken(accessToken);
        router.push({ name: "ThemeList" });
      }

      function destroyTokenAndRedirectTo(routeName: string): void {
        setAccessToken(null);
        router.push({ name: routeName });
      }

      async function logout() {
        return window.axios.post("auth/logout").finally(() => {
          destroyTokenAndRedirectTo("Login");
        });
      }

    return {
        login, 
        logout, 
        destroyTokenAndRedirectTo
    }
}