import { createRouter, createWebHistory, RouteRecordRaw  } from "vue-router";

//import Login from "../pages/auth/Login.vue";

import Login from "../pages/auth/Login.vue"
import Register from "../pages/auth/Register.vue"
import ThemeList from "../pages/theme/ListTheme.vue"
import Dashboard from "../pages/task/DashboardTask.vue"
import ListTask from "../components/task/ListTask.vue";
import CreateTask from "../components/task/CreateTask.vue";
import ListCategory from "../components/category/ListCategory.vue"
import Task from "../components/task/Task.vue"


const routes:RouteRecordRaw[]  = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/theme-list",
        name: "ThemeList",
        component: ThemeList,
        meta: { requiresAuth: true },
    },
    {
        path: "/dashboard-task/:id",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
        children: [
            {
                path: "listTask",
                component: ListTask,
                meta: {requiresAuth: true}
            },
            {
                path: "create-task",
                component: CreateTask,
                meta: {requiresAuth: true}
            },
            {
                path: "task/:taskid",
                name: "task",
                component: Task,
                meta: {requiresAuth: true}
            },
            {
                path: "list-category",
                component: ListCategory,
                meta: {requiresAuth: true}
            },
            // {
            //     path: "list-user",
            //     component: ListUserTheme,
            //     meta: {requiresAuth: true}
            // },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !localStorage.getItem("acces_token")) {
        next({ name: "Login" });
    } else {
        next();
    }
});

export default router;