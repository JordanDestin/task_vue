<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import useCategory from "../../composable/category/category";
import useTask from "../../composable/task/task";

const route = useRoute();
const { taskForm, createTask, validationErrors } = useTask();
const { getAllCategory, listCategory } = useCategory();

let paramId = Number(route.params.id);

onMounted(async () => {
  await getAllCategory(route.params.id);
});
</script>

<template>
  <div class="card w-full bg-base-100">
    <h1 class="text-3xl text-slate-800 font-bold">Créer une tâche</h1>
    <form @submit.prevent="createTask(paramId)">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Titre</span>
          </label>
          <input
            type="text"
            placeholder="Titre"
            class="input input-bordered"
            v-model="taskForm.title"
          />
        </div>
        <div class="text-red-600 mt-1">
          <div v-for="message in validationErrors?.title">
            {{ message }}
          </div>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Catégories</span>
          </label>

          <div v-if="listCategory.length == 0">
            <router-link
              :to="{ path: '/dashboard-task/' + route.params.id + '/list-category' }"
            >
              <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path
                    d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
                  /></svg
                >Ajouter une catégorie
              </button>
            </router-link>
          </div>
          <select
            class="select select-bordered max-w-xs"
            v-model="taskForm.category_id"
            v-else
          >
            <option disabled selected>Choisir une catégorie</option>
            <option v-for="item in listCategory" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
        <div class="text-red-600 mt-1">
          <div v-for="message in validationErrors?.category_id">
            {{ message }}
          </div>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Détail</span>
          </label>
          <textarea
            class="textarea textarea-bordered"
            placeholder="Détail"
            v-model="taskForm.detail"
          ></textarea>
        </div>
        <div class="text-red-600 mt-1">
          <div v-for="message in validationErrors?.detail">
            {{ message }}
          </div>
        </div>

        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">S'enregistrer</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
