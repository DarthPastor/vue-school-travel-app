import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/HomePage.vue";
import BrazilPage from "../pages/BrazilPage";
import HawaiiPage from "../pages/HawaiiPage";
import JamaicaPage from "../pages/JamaicaPage";
import PanamaPage from "../pages/PanamaPage";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/about",
        name: "about",
        component: AboutPage,
    },
    {
        path: "/brazil",
        name: "brazil",
        component: BrazilPage,
    },
    {
        path: "/hawaii",
        name: "hawaii",
        component: HawaiiPage,
    },
    {
        path: "/jamaica",
        name: "jamaica",
        component: JamaicaPage,
    },
    {
        path: "/panama",
        name: "panama",
        component: PanamaPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
