import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
    { path: "/", name: "home", component: HomePage },
    {   
        path: "/brazil", 
        name: "brazil",
        component: () => import ("../pages/BrazilPage.vue")
    },
    { 
        path: "/hawaii", 
        name: "hawaii", 
        component: () => import ("../pages/HawaiiPage") 
    },
    { 
        path: "/jamaica", 
        name: "jamaica", 
        component: () => import ("../pages/JamaicaPage") 
    },
    { 
        path: "/panama", 
        name: "panama", 
        component: () => import ("../pages/PanamaPage") 
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
