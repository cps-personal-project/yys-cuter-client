import fs from "fs";
import path from "path";
import { contextBridge, ipcRenderer } from "electron";
import { domReady } from "./utils";
import { useLoading } from "./loading";

const { appendLoading, removeLoading } = useLoading();

(async () => {
  await domReady();

  appendLoading();
})();

// --------- 暴露一些API给渲染进程 ---------
contextBridge.exposeInMainWorld("fs", fs);
contextBridge.exposeInMainWorld("electron", {
  startDrag: (filename: string) => {
    ipcRenderer.send("ondragstart", path.join(process.cwd(), filename));
  },
});
contextBridge.exposeInMainWorld("removeLoading", removeLoading);
contextBridge.exposeInMainWorld("ipcRenderer", withPrototype(ipcRenderer));

// `exposeInMainWorld` can't detect attributes and methods of `prototype`, manually patching it.
function withPrototype(obj: Record<string, any>) {
  const protos = Object.getPrototypeOf(obj);

  for (const [key, value] of Object.entries(protos)) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) continue;

    if (typeof value === "function") {
      // Some native APIs, like `NodeJS.EventEmitter['on']`, don't work in the Renderer process. Wrapping them into a function.
      obj[key] = function (...args: any) {
        return value.call(obj, ...args);
      };
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
