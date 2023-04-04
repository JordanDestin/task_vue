<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import useComment from "../../composable/comment/comment";
import useSubTask from "../../composable/subtask/subtask";
import useTask from "../../composable/task/task";
//import useStatus from "../../composable/status";

const { getTask, task } = useTask();
//const { getAllStatus, listStatus } = useStatus();

const {
  getAllSubtask,
  createSubTask,
  deleteSubTask,
  listSubtask,
  subTaskForm,
  updateSubTask,
  validationErrors,
} = useSubTask();

const route = useRoute();
const {
  getAllComment,
  listComment,
  comment,
  deleteComment,
  createComment,
  commentForm,
} = useComment();

const testToto = () => {
  alert("kikiki");
};

onMounted(async () => {
  getTask(route.params.id, route.params.taskid);
  getAllSubtask(route.params.id, route.params.taskid);
 getAllComment(route.params.taskid);
 //getAllStatus();
});
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <!-- Smaller container -->
    <div class="max-w-3xl mx-auto">
      <!-- Task -->
      <div class="max-w-3xl mx-auto">
        <div class="container mx-auto">
          <div
            class="bg-white shadow-lg rounded-sm border border-slate-200 p-4"
            draggable="true"
          >
            <div class="sm:flex sm:justify-between sm:items-start">
              <!-- Left side -->

              <div
                class="grow mt-0.5 mb-3 sm:mb-0 space-y-3 px-8 border-b md:border-b-0 md:border-r"
              >
                <div class="flex items-center">
                  <!-- Drag button -->
                  <span class="sr-only">Drag</span>
                  <button class="cursor-move mr-2">
                    <svg
                      class="w-3 h-3 fill-slate-500"
                      viexBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1h12v2H0V1Zm0 4h12v2H0V5Zm0 4h12v2H0V9Z"
                        fill="#CBD5E1"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </button>

                  <div class="font-medium text-slate-800 peer-checked:line-through ml-2">
                    {{ task.title }}
                  </div>
                </div>
                <div class="text-sm text-neutral-600">
                  <h1 class="font-bold">Détails</h1>
                  <p>{{ task.detail }}</p>
                </div>

                <form>
                  <div class="">
                    <div
                      class="flex items-center justify-between bg-white border-t border-slate-200 h-16"
                    >
                      <!-- Message input -->
                      <form class="grow flex">
                        <div class="grow mr-3">
                          <input
                            id="name"
                            name="name"
                            class="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300"
                            type="text"
                            placeholder="Sous tâche"
                            v-model="subTaskForm.name"
                          />
                          <input
                            type="text"
                            placeholder="Sous tâche"
                            class="input input-bordered w-full max-w-xs"
                            v-model="subTaskForm.name"
                          />
                        </div>
                        <button
                          type="button"
                          class="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 bg-indigo-500"
                          @click="createSubTask(route.params.id, task.id)"
                        >
                          Ajouter
                        </button>
                      </form>
                    </div>
                  </div>
                </form>

                <div class="space-y-2">
                  <h1 class="font-bold border-b border-slate-200">
                    listes des sous taches
                  </h1>
                  <div
                    class="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2"
                    v-for="item in listSubtask"
                    :value="item.id"
                  >
                    <label class="flex items-center">
                      <input
                        :id="item.name"
                        type="checkbox"
                        checked="checked"
                        v-model="item.validate"
                        class="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                        @change="
                          updateSubTask(route.params.id, task.id, item.id, item.validate)
                        "
                      />

                      <span
                        :class="[
                          item.validate
                            ? 'font-medium text-slate-800 line-through ml-2'
                            : 'font-medium text-slate-800 ml-2',
                        ]"
                        >{{ item.name }}</span
                      >

                      <!-- <span
                        class="font-medium text-slate-800 peer-checked:line-through ml-2"
                        >{{ item.name }}</span> -->
                    </label>

                    <!-- Right side -->
                    <div class="flex items-center space-x-4 pl-10 md:pl-0">
                      <button
                        class="text-rose-500 hover:text-rose-600 rounded-full"
                        @click="deleteSubTask(route.params.id, task.id, item.id)"
                      >
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
                          <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                          <path
                            d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <h1 class="font-bold border-b border-slate-200">Commentaire</h1>

                <div
                  class="flex items-start mb-4 last:mb-0"
                  v-for="item in listComment"
                  :value="item.id"
                >
                  <span class="mr-3">{{ item.user }}</span>
                  <div
                    class="text-sm bg-indigo-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1"
                  >
                    {{ item.comment }}
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="text-xs text-slate-500 font-medium">
                      {{ item.created_at }}
                    </div>
                    <button
                      class="text-rose-500 hover:text-rose-600 rounded-full"
                      @click="deleteComment(item.id)"
                    >
                      <span class="sr-only">supprimé</span>
                      <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
                        <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                        <path
                          d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <form>
                  <div class="max-w-2xl mx-auto">
                    <textarea
                      id="comment"
                      name="comment"
                      rows="2"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Commentaire"
                      v-model="commentForm.comment"
                    ></textarea>
                  </div>

                  <div class="flex items-center justify-end mt-4">
                    <button
                      type="button"
                      class="rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 bg-indigo-500"
                      @click="createComment(task.id)"
                    >
                      Ajouter
                    </button>
                  </div>
                </form>
              </div>
              <!-- Right side -->
              <div class="items-center justify-end space-x-3">
                <!-- Avatars -->
                <div class="shrink-0 -space-x-3 -ml-p ml-3 mb-5">
                  <select
                    class="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold"
                    v-model="task.status_id"
                    @change="updateStatus(route.params.id, task.id)"
                  >
                    <option v-for="item in listStatus" :value="item.id">
                      {{ item.name }}
                    </option>
                  </select>
                </div>

                <!-- To-do info -->
                <div class="items-center text-slate-400 ml-3">modifié</div>
                <!-- Attach button -->

                <div class="text-xs text-neutral-500">date de modification</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.completed {
  text-decoration: line-through;
}
</style>
