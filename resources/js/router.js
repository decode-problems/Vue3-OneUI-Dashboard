import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from "./components/Dashboard";
import About from "./components/About";

const routes = [
    {path: '/', component: Dashboard},
    {path: '/about', component: About},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
