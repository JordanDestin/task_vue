<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "../../components/Navbar.vue";
import useTheme from "../../composable/theme/theme";

const { getAllThemes, listThemes, deleteTheme, nameTheme, createTheme } = useTheme();

onMounted(() => {
  getAllThemes();
});
</script>

<template>
  <Navbar />
  <div class="flex h-screen overflow-hidden">
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-100"
    >
      <h1 class="text-lg text-center font-bold m-5">Tâches Manager</h1>

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <div class="max-w-3xl mx-auto">
            <div class="sm:flex sm:justify-between sm:items-center mb-8">
              <div class="mb-4">
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">
                  Listes des themes ✨
                </h1>
              </div>
            </div>

            <div class="space-y-6">
              <form @submit.prevent="createTheme">
                <h3 class="text-lg font-bold">Nom du theme</h3>
                <input
                  type="text"
                  placeholder="Nom"
                  class="input input-bordered w-full max-w-xs"
                  v-model="nameTheme.name"
                />
                <button type="submit" class="btn btn-active btn-primary ml-3">
                  Ajouter
                </button>
              </form>

              <!-- <div v-for="item in listThemes" :value="item.id">
                <div class="space-y-2">
                  <div
                    class="bg-amber-50 shadow-lg rounded-sm border border-amber-300 px-5 py-4"
                    draggable="true"
                  >
                    <div class="sm:flex sm:justify-between sm:items-start">
                      <div class="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
                        <div class="flex items-center">
                          <span
                            class="font-medium text-slate-800 peer-checked:line-through ml-2"
                            >{{ item.name }}</span
                          >
                        </div>
                      </div>

                      <div class="flex items-center justify-end space-x-3">
                        <button
                          type="button"
                          class="inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          <router-link
                            :to="{
                              path: '/dashboard-task/' + item.theme_id + '/listTask',
                            }"
                          >
                            voir
                          </router-link>
                        </button>

                        <button type="button" @click="deleteTheme(item.theme_id)">
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
              </div> -->

              <div class="grid grid-cols-12 gap-6">
                <div
                  class="card w-100 text-black col-span-full sm:col-span-6 xl:col-span-3 bg-amber-50 shadow-lg rounded-sm border border-slate-200 shadow-2xl"
                  v-for="item in listThemes"
                  :value="item.id"
                >
                  <div class="card-body items-center text-center">
                    <h2 class="card-title">{{ item.name }}</h2>

                    <div class="card-actions justify-center">
                      <button
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        <router-link
                          :to="{
                            path: '/dashboard-task/' + item.theme_id + '/listTask',
                          }"
                        >
                          voir
                        </router-link>
                      </button>
                      <button type="button" @click="deleteTheme(item.theme_id)">
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
      </main>
    </div>
  </div>
</template>
