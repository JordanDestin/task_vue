import { ref, reactive } from "vue";
import { Category, CategoryForm } from "../../interfaces/category/category.interface";

export default function useCategory() {
    const listCategory = ref([]);
    const category = ref<Category[]>([]);
    const nameCategory = reactive<CategoryForm>({
        name: "",
    });

    const getAllCategory = (id: any) =>
    {
        return window.axios
            .get("theme/"+ id + "/category")
            .then((res) => {
                listCategory.value = res.data.listCategories;
                console.log(res.data.listCategories, "qsdqsd");
            })
            .catch((err) => console.log(err));
    }

    const createCategory = (id: number)=> {
        return window.axios
        .post("theme/"+ id + "/category",nameCategory)
        .then((res) => {
            nameCategory.name = '';
            getAllCategory(id);
        })
        .catch((err) => console.log(err));
    }

    const deleteCategory = (id: number,idCategory: number)=> {
        return window.axios
            .delete("theme/" + id + "/category/" + idCategory)
            .then((res) => {
                getAllCategory(id);
            })
            .catch((err) => console.log(err));
    }

    return {
        getAllCategory,
        listCategory,
        category,
        nameCategory,
        deleteCategory,
        createCategory
    };
}
