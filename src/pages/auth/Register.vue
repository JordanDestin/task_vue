<script setup lang="ts">
import useAuth from '../../composable/auth/register'

const { registerForm, handleSubmit, errors } = useAuth();
</script>

<template>
    <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Register now!</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form @submit.prevent="handleSubmit">
          <div class="card-body">

            <div class="form-control">
              <label class="label">
                <span class="label-text">Nom</span>
              </label>
              <input
                type="text"
                placeholder="Nom"
                class="input input-bordered"
                v-model="registerForm.name"
              />
            </div>
            <div class="text-red-600 mt-1">
              <div v-for="message in errors?.name">
                {{ message }}
              </div>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
                v-model="registerForm.email"
              />
            </div>
            <div class="text-red-600 mt-1">
              <div v-for="message in errors?.email">
                {{ message }}
              </div>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                class="input input-bordered"
                v-model="registerForm.password"
              />
            
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Confirmation mot de passe</span>
              </label>
              <input
                id="password_confirmation"
                type="password"
                placeholder="Confirmation mot de passe"
                class="input input-bordered"
                v-model="registerForm.password_confirmation"
              />
           
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">S'enregistrer</button>
            </div>
          </div>
        </form>
        <!-- Footer -->
        <div class="px-3  border-t border-slate-200">
          <div class="text-sm">
                Avez-vous déjà un compte?
                <router-link
                  class="font-medium text-indigo-500 hover:text-indigo-600"
                  to="/"
                  >Connexion</router-link
                >
              </div>
        </div>
      </div>
    </div>
  </div>
</template>