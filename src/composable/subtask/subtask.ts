import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Subtask, SubtaskErrors,SubstaskForm } from "../../interfaces/subtask/subtask.interface"; 

export default function useSubTask() {
    const listSubtask = ref([]);
    const router = useRouter();
    const subTask = ref<Subtask[]>([]);
    const validationErrors = ref<SubtaskErrors>({});

    const subTaskForm = reactive<SubstaskForm>({
        name: "",
        validate: false,
    });

    const getAllSubtask = (id: number,idTask: number) => {
        console.log(id,idTask)
        return window.axios
            .get("theme/" + id+ "/task/" + idTask + "/subtask")
            .then((res) => {
                listSubtask.value = res.data.data;
                console.log(res.data.data, "listsubstask");
            })
            .catch((err) => console.log(err));
    };

    const createSubTask = (id: number,idTask: number) => {

        console.log(subTaskForm,"suqsdqsd")
        return window.axios
            .post("theme/" + id+ "/task/" + idTask + "/subtask", subTaskForm)
            .then((res) => {
                subTaskForm.name = "";
                getAllSubtask(id,idTask);
            })
            .catch((err) => console.log(err));
    };

    const updateSubTask = (id: number, idTask: number, idSubTask: number, valueinput: boolean) => {
        return window.axios
            .put("theme/" + id+ "/task/" + idTask + "/subtask/" + idSubTask, {
                validate: valueinput,
            })
            .then((res) => {
                getAllSubtask(id,idTask);
            })
            .catch((err) => console.log(err));
    };

    const deleteSubTask = (id: number, idTask: number, idSubTask: number) => {
        return window.axios
            .delete("theme/" + id+ "/task/" + idTask + "/subtask/" + idSubTask)
            .then((res) => {
                getAllSubtask(id,idTask);
            })
            .catch((err) => console.log(err));
    };

    return {
        getAllSubtask,
        listSubtask,
        subTask,
        updateSubTask,
        deleteSubTask,
        createSubTask,
        subTaskForm,
        validationErrors,
    };
}
