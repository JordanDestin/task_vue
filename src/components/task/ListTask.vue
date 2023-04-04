<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import useStatus from "../../composable/status/status";
import useTask from "../../composable/task/task";
import TaskInProgress from "./TaskInProgress.vue";
import TaskToDo from "./TaskToDo.vue";
import TaskInWaiting from "./TaskInWaiting.vue";
import TaskResolved from "./TaskResolved.vue";
import AddTask from "./AddTask.vue";
const {
  getAllTasks,
  listTask,
  deleteTask,
  taskInProgress,
  taskWaiting,
  taskInResolved,
} = useTask();
const { getAllStatus, listStatus } = useStatus();

const route = useRoute();

onMounted(() => {
  getAllTasks(Number(route.params.id));
  getAllStatus();
});
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <div class="max-w-3xl mx-auto">
      <div class="sm:flex sm:justify-between sm:items-center mb-8">
        <div class="mb-4 sm:mb-0">
          <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">
            Listes des tâches ✨
          </h1>
        </div>

        <AddTask />
      </div>

      <!-- <div
        class="space-y-6"
        v-if="
          listTask.length == 0 &&
          taskInProgress.length == 0 &&
          taskWaiting.length == 0 &&
          taskInResolved == 0
        "
      >
        Aucune tâche
      </div> -->

      <TaskToDo
        @delete-task="(idTask) => deleteTask(Number(route.params.id), idTask)"
        :listTask="listTask"
        v-if="listTask.length != 0"
      />
      <TaskInProgress
        @delete-task="(idTask) => deleteTask(Number(route.params.id), idTask)"
        :taskInProgress="taskInProgress"
        v-if="taskInProgress.length != 0"
      />
      <TaskInWaiting
        @delete-task="(idTask) => deleteTask(Number(route.params.id), idTask)"
        :taskWaiting="taskWaiting"
        v-if="taskWaiting.length != 0"
      />
      <TaskResolved
        @delete-task="(idTask) => deleteTask(Number(route.params.id), idTask)"
        :taskInResolved="taskInResolved"
        v-if="taskInResolved.length != 0"
      />
    </div>
  </div>
</template>
