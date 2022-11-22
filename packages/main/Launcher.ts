/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date:
 * @Last Modified by: CPS
 * @Last Modified time: 2022-03-06 23:33:32.524643
 * @Projectname
 * @file_path "D:\CPS\MyProject\YYS\YYS-Electron-vue3\packages\main"
 * @Filename "Launcher.ts"
 * @Description: 加载器入口
 */

"use strict";
import { app } from "electron";
import ElectronLog from "electron-log";
import { EventEmitter } from "events";
import { release } from "os";

import { application as Application } from "./Application";
import { exceptionHandler as ExceptionHandler } from "./core/ExceptionHandler";
import logger from "./core/Logger";

export default class Launcher extends EventEmitter {
  public err: ExceptionHandler;
  public log: ElectronLog.ElectronLog;
  public Application: Application;

  constructor() {
    super();
    this.err = new ExceptionHandler();
    this.log = logger;

    // 注册事件
    this.eventRegister();

    this.init();
    this.test();
  }

  public init() {
    // Disable GPU Acceleration for Windows 7
    if (release().startsWith("6.1")) app.disableHardwareAcceleration();

    // Set application name for Windows 10+ notifications
    if (process.platform === "win32") app.setAppUserModelId(app.getName());

    if (!app.requestSingleInstanceLock()) {
      app.quit();
      process.exit(0);
    }

    this.whenReady();
  }

  private whenReady() {
    console.log("whenReady: ");
  }

  private async eventRegister() {
    this.onReady();
    this.onActivate();
    this.onSecondInstance();
    this.onAppWillQuit();
  }

  public async onReady() {
    app.on("ready", e => {
      console.log("app.on ready");
    });
  }

  public async test() {
    app.whenReady().then(() => {
      console.log("app.on test");
      this.Application = new Application();
    });
  }

  public async onActivate() {
    app.on("activate", () => {
      console.log("app: activate");
      // const allWindows = BrowserWindow.getAllWindows();
      // if (allWindows.length) {
      //   allWindows[0].focus();
      // } else {
      //   createWindow();
      // }
    });
  }

  /* 防止重复启动 */
  public async onSecondInstance() {
    app.on("second-instance", () => {
      console.log("app: second-instance");
      //   if (win) {
      //     // Focus on the main window if the user tried to open another
      //     if (win.isMinimized()) win.restore();
      //     win.focus();
      //   }
    });
  }

  public async onAppWillQuit() {
    app.on("will-quit", () => {
      this.log.info("app will quit");
      console.log("app-will-quit");
      process.exit(1);
    });
  }

  public async onWindowAllClosed() {
    app.on("window-all-closed", () => {
      this.Application.close();
      if (process.platform !== "darwin") app.quit();
    });
  }
}
