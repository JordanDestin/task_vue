
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Task, TaskForm,TaskErrors } from "../../interfaces/task/task.interface";
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default function useTask() {
    const $toast = useToast();
    const listTask = ref<Task[]>([]);
    const taskInProgress = ref<Task[]>([]);
    const taskInResolved = ref<Task[]>([]);
    const taskWaiting = ref<Task[]>([]);
    const router = useRouter();
    const task = ref<Task[]>([]);
    const validationErrors = ref<TaskErrors>({});
    
    const taskForm = reactive<TaskForm>({
        title: "",
        detail: "",
        category_id: 1,
        statutes_id: 1
    });

    const getAllTasks = (id: number) => {
        return window.axios
            .get("theme/" + id + "/task")
            .then((res) => {
                listTask.value = res.data.listTask;
                taskInProgress.value = res.data.tasksInProgress;
                taskWaiting.value = res.data.tasksPending;
                taskInResolved.value = res.data.tasksResolved

                console.log(res, "coucou");
            })
            .catch((err) => console.log(err));
    };

    const getTask = (idTheme: number, idTask:number) => {
        return window.axios
            .get("theme/" + idTheme + "/task/" + idTask)
            .then((res) => {
                task.value = res.data.task;
            })
            .catch((err) => console.log(err));
    };

    const createTask = (idTheme: number) => {
        validationErrors.value={}
        return window.axios
            .post("theme/" + idTheme + "/task",taskForm)
            .then((res) => {
                router.push({ path: "listTask" });
                $toast.success('Tâche créer');                
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    validationErrors.value = error.response.data.errors;
                }
              })
    };

    const updateStatus = (idTheme: number, idTask: number, idStatutes:number) => {
        return window.axios 
            .put("theme/" + idTheme + "/update-status-task/" + idTask, {idStatus:idStatutes})
            .then((res) => {
                getTask(idTheme, idTask);
                $toast.success('Status modifier');  
            })
            .catch((err) => console.log(err));
    };

    const deleteTask = (idTheme: number, idTask: number) => {
        return window.axios
            .delete("theme/" + idTheme + "/task/" + idTask)
            .then((res) => {
                getAllTasks(idTheme);
            })
            .catch((err) => console.log(err));
    };

    return {
        getAllTasks,
        listTask,
        getTask,
        task,
        deleteTask,
        createTask,
        taskForm,
        validationErrors,
        updateStatus,
        taskInProgress,
        taskWaiting,
        taskInResolved
    };
}
