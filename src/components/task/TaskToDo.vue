<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  listTask: {
    type: Object,
  },
});

defineEmits(["deleteTask"]);
</script>

<template>
  <div class="p-6 bg-indigo-100 border-b border-gray-200 mb-5">
    <h2 class="font-bold mb-5">Tâches à faire</h2>
    <div class="space-y-6">
      <div v-for="item in listTask" :value="item.id">
        <div class="space-y-2">
          <div
            class="bg-white shadow-lg rounded-sm border border-slate-200 p-4"
            draggable="true"
          >
            <div class="sm:flex sm:justify-between sm:items-start">
              <div class="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
                <div class="flex items-center">
                  <span
                    class="font-medium text-slate-800 peer-checked:line-through ml-2"
                    >{{ item.title }}</span
                  >
                </div>
              </div>

              <div class="flex items-center justify-end space-x-3">
                <!-- <select class="select select-bordered w-full max-w-xs">
                    <option v-for="item in listStatus" :value="item.id">
                      {{ item.name }}
                    </option>
                  </select> -->
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 bg-indigo-500"
                >
                  <router-link :to="{ path: 'task/' + item.id }">voir </router-link>
                </button>

                <button type="button" @click="$emit('deleteTask', item.id)">
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
        </div>
      </div>
    </div>
  </div>
</template>
