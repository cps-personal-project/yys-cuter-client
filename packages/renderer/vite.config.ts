/*
 * @Author: CPS holy.dandelion@139.com
 * @Date: 2022-02-14 01:17:53
 * @LastEditors: CPS holy.dandelion@139.com
 * @LastEditTime: 2022-05-25 22:41:37
 * @FilePath: \YYS-Electron-vue3\packages\renderer\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { builtinModules } from "module";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import resolve from "vite-plugin-resolve";
import pkg from "../../package.json";

import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
// import { VantResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.NODE_ENV,
  root: __dirname,
  plugins: [
    vue({ reactivityTransform: true }),

    // 自动导入内置模块
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "types/auto-imports.d.ts",
    }),

    // 自动导入自定义模块
    // 不使用了，怕日后维护会乱了套
    // Components({
    //   dirs: ["src/layout", "src/test", "src/components/ImgReader", "src/components/ToolBar", "src/components"],
    //   directoryAsNamespace: true,
    //   dts: "types/components.d.ts",
    // }),
  ],

  base: "./",
  resolve: {
    alias: {
      "@": "/src/",
    },
  },

  build: {
    emptyOutDir: true,
    outDir: "../../dist/renderer",
  },

  server: {
    port: pkg.env.PORT,
  },
});
