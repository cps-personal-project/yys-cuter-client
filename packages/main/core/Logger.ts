/*!
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date:
 * @Last Modified by: CPS
 * @Last Modified time: 2022-02-27 18:47:18.076580
 * @Projectname
 * @file_path "D:\CPS\MyProject\YYS\YYS-Electron-vue3\packages\main\core"
 * @Filename "logger.ts"
 * @Description: 日志功能
 */

"use strict";
import logger from "electron-log";
import { app } from "electron";
import { join } from "path";

logger.transports.file.level = "silly";
logger.transports.file.maxSize = 1048576;
logger.transports.file.resolvePath = () => join(app.getAppPath(), "logs/main.log");

logger.transports.console.level = 'debug';

logger.info(`[YYS] Logger init`);
logger.warn(`[YYS] Logger init`);

export default logger;
