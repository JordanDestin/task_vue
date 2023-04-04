import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Theme, ThemeName } from "../../interfaces/theme/theme.interface";
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default function useTheme() {
    const $toast = useToast();
    const router = useRouter();
    const listThemes = ref<Theme[]>([]);
    const nameTheme = reactive<ThemeName>({
        name: "",
      });
    const getAllThemes = (): Promise<void>  => {
        return window.axios
            .get("theme")
            .then((response)=>{
                listThemes.value = response.data.listThemes;
                console.log(response, "qsdqsd");
            })
            .catch((err) => console.log(err));
    };

    const createTheme = (): Promise<void>  => {
        console.log('toto')
        return window.axios
            .post("/theme", nameTheme)
            .then((res) => {
                console.log(res.data, "qsdqsd");
                getAllThemes()
                router.push("/theme-list" );
                $toast.success('Thème créer');
                nameTheme.name = '';
            })
            .catch((err) => {
              $toast.error('Ce thème existe déjà');
            });
    };

    const deleteTheme = (theme: number) => {
        console.log(theme);

        return window.axios
            .delete("theme/" + theme)
            .then((res) => {
              $toast.success('theme supprimer.')
                getAllThemes();
            })
            .catch((err) => console.log(err));
    };

    return{
        getAllThemes,
        listThemes,
        deleteTheme,
        createTheme,
        nameTheme,
    }

}