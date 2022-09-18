import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
    { 
        path: "/", 
        name: "home", 
        component: HomePage 
    },
    {
        path: "/destination/:id/:slug", 
        name:"destination.show", 
        component: ()=>import('@/pages/DestinationShow.vue'),
        props: route => ({id: parseInt(route.params.id)})
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "vue-school-active-link"
});

export default router;
