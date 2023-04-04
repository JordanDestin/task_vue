<script setup lang="ts">
import { onMounted } from "vue";
 import useAuth from "../composable/auth/auth";

 const { logout } = useAuth();

// onMounted(() => {
//   getUser();
// });
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link class="btn btn-ghost normal-case text-xl" to="/theme-list">
        Task Manager
      </router-link>
   
    </div>
    <div class="flex-none gap-2">
    <!-- {{ user.name }} -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li>
            <button @click="logout">Se déconnecter</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
