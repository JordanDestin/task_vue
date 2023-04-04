<script setup lang="ts">
import Navbar from "../../components/Navbar.vue";
import ListTaskVue from "../../components/task/ListTask.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <Navbar />
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="">
            <div class="">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 w-72 bg-base-100 text-base-content bg-slate-900 text-zinc-50">
        <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
          <router-link :to="{ path: '/dashboard-task/' + route.params.id + '/listTask' }">
            <div class="flex items-center justify-between">
              <div class="grow flex items-center">
                <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    class="fill-current text-slate-600"
                    d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                  />
                  <path class="fill-current text-slate-600" d="M1 1h22v23H1z" />
                  <path
                    class="fill-current text-slate-400"
                    d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                  />
                </svg>
                <span
                  class="text-sm text-white font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                  >Tache</span
                >
              </div>
            </div>
          </router-link>
        </li>
        <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
          <router-link
            :to="{ path: '/dashboard-task/' + route.params.id + '/list-category' }"
          >
            <div class="flex items-center justify-between">
              <div class="grow flex items-center">
                <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    class="fill-current text-slate-600"
                    d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                  />
                  <path
                    class="fill-current text-slate-400"
                    d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                  />
                </svg>
                <span
                  class="text-sm text-white font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                  >Catégories</span
                >
              </div>
            </div>
          </router-link>
        </li>
        <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
          <div class="flex items-center justify-between">
            <div class="grow flex items-center">
              <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                <path class="fill-current text-slate-600" d="M1 3h22v20H1z" />
                <path
                  class="fill-current text-slate-400"
                  d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
                />
              </svg>
              <span
                class="text-sm text-white font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                >Calendrier</span
              >
            </div>
          </div>
        </li>
        <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
          <!-- <router-link
            :to="{ path: '/dashboard-task/' + route.params.id + '/list-user' }"
          > -->
            <div class="flex items-center justify-between">
              <div class="grow flex items-center">
                <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    class="fill-current text-slate-600"
                    d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                  />
                  <path
                    class="fill-current text-slate-400"
                    d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                  />
                </svg>
                <span
                  class="text-sm text-white font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                  >Utilisateurs</span
                >
              </div>
            </div>
          <!-- </router-link> -->
        </li>
      </ul>
    </div>
  </div>
</template>
