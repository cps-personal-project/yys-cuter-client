/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date: 2022-03-06 23:40:35.260960
 * @Last Modified by: CPS
 * @Last Modified time: 2022-03-06 23:33:32.524643
 * @Projectname
 * @file_path "D:\CPS\MyProject\YYS\YYS-Electron-vue3\packages\main\core"
 * @Filename "WindowManager.ts"
 * @Description: 功能描述
 */

"use strict";
import { EventEmitter } from "events";
import { BrowserWindow, shell } from "electron";
import { join } from "path";

let dev = true;

export class WindowManager extends EventEmitter {
  private win: BrowserWindow | null;
  private eventOnQuit: [];

  constructor(options) {
    super();

    this.init(options);
  }

  public init(options) {
    console.log("WindowManager init", options);
    this.createWindow(options);
  }

  public onQuit() {
    for (let evnet of this.eventOnQuit) {
    }
  }

  public async createWindow(options?: Electron.BrowserWindowConstructorOptions) {
    let defOps: Electron.BrowserWindowConstructorOptions = {
      title: "Main window",
      webPreferences: {
        webSecurity: false,
        preload: join(__dirname, "../preload/index.cjs"),
      },
    };

    if (options) {
      Object.assign(defOps, options);

      if (options.width && dev) defOps.width = defOps.width + 300;

      console.log("dev: ", dev);

      console.log("defOps: ", defOps);
    }

    this.win = new BrowserWindow(defOps);

    if (!dev) {
      this.win.loadFile(join(__dirname, "../renderer/index.html"));
    } else {
      // 🚧 Use ['ENV_NAME'] avoid vite:define plugin
      const url = `http://${process.env["VITE_DEV_SERVER_HOST"]}:${process.env["VITE_DEV_SERVER_PORT"]}`;

      console.log("url: ", url);

      this.win.loadURL(url);
      this.win.webContents.openDevTools();
    }

    // Test active push message to Renderer-process
    this.win.webContents.on("did-finish-load", () => {
      this.win?.webContents.send("main-process-message", new Date().toLocaleString());
    });

    // Make all links open with the browser, not with the application
    this.win.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith("https:")) shell.openExternal(url);
      return { action: "deny" };
    });
  }
}
