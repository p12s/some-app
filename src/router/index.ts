import {createRouter, createWebHistory} from "vue-router";
import { RouteNamesEnum } from "./router.types";
import { APP_ENABLE_DEBUG_UTILS } from "../common/appConfig";

// https://gitlab.com/Sticker0ne/vue-spinner/-/blob/debug-hacks/src/router/index.ts
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: RouteNamesEnum.home,
            component: () => import("../pages/Index.vue"),
            meta: {}
        }
    ]
})

// if SSR doesn't use
if (window && APP_ENABLE_DEBUG_UTILS) {
    window.$router = router
}
export default router;