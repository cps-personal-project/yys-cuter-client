/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-11-21 23:22:02.057232
 * @Last Modified by: CPS
 * @Last Modified time: 2022-11-21 23:22:02.057232
 * @Projectname
 * @file_path "D:\CPS\MyProject\Projects_Personal\YYS\YYS-cuter-client\packages\renderer\src\router"
 * @Filename "router"
 * @Description: 路由生成
 */

// import Layout from "@/layout/index.vue";
// import ImageCuter from "@/components/ImageCuter/index.vue";

import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/components/Home/index.vue"),
  },
  {
    path: "/plugin-ImageCuter",
    name: "ImageCuter",
    component: () => import("@/components/ImageCuter/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
