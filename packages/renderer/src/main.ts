import { createApp } from "vue";
import App from "@/App.vue";
import IconFont from "@/components/IconFont.vue";

import "@/tailwind.css";

import router from "@/router";

const app = createApp(App);
app.component("IconFont", IconFont);
app.use(router);
app
  .mount("#app")
  .$nextTick(window.removeLoading)
  .then(() => {
    init();
    test();
  });

// console.log("fs", window.fs);
// console.log('ipcRenderer', window.ipcRenderer)
// Usage of ipcRenderer.on

function init() {
  window.ipcRenderer.on("main-process-message", (_event, ...args) => {
    console.log("[Receive Main-process message]:", ...args);
  });
}

function test() {
  const drag = document.getElementById("drag");
  if (drag) {
    drag.ondragstart = event => {
      window.electron.startDrag("drag-and-drop.md");
    };
  }
}
