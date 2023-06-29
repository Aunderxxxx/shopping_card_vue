import Vue from  "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../Page/Home";
import Product from "../Page/Product";
import Card from "../Page/Card";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/product",
        name: "product",
        component: Product,
    },
    {
        path: "/card",
        name: "card",
        component: Card,
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;