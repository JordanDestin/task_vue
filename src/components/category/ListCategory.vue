<script setup lang="ts">
import { onMounted } from "vue";
import useCategory from "../../composable/category/category";
import { useRoute } from "vue-router";

const {
  getAllCategory,
  listCategory,
  deleteCategory,
  nameCategory,
  createCategory,
} = useCategory();
const route = useRoute();


onMounted(() => {
  getAllCategory(route.params.id);
});
</script>

<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div class="max-w-3xl mx-auto">
        <div class="sm:flex sm:justify-between sm:items-center mb-8">
          <div class="mb-4">
            <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">
              Listes des catégories
            </h1>
          </div>

          <div
            class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-4"
          ></div>
        </div>

        <div class="space-y-6">
          <form @submit.prevent="createCategory(route.params.id)">
            <h3 class="text-lg font-bold">Créer une catégorie</h3>
            <input
              type="text"
              placeholder="Nom"
              class="input input-bordered w-full max-w-xs"
              v-model="nameCategory.name"
            />
            <button type="submit" class="btn btn-active btn-primary ml-3">Ajouter</button>
            <!-- <button
                  type="submit"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Ajouter
                </button> -->
          </form>

          <div v-for="item in listCategory" :value="item.id">
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
                    <button type="button" @click="deleteCategory(route.params.id,item.id)">
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
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
