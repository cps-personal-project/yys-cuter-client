import { app, dialog } from "electron";
import logger from "./Logger";

export interface ExceptionHandler {
  setup(): void;
}

export class exceptionHandler implements ExceptionHandler {
  constructor() {
    this.setup();
  }

  setup() {
    process.on("uncaughtException", err => {
      const { message, stack } = err;

      logger.error(`[YYS] Uncaught exception: ${message}`);
      logger.error(stack);

      if (app.isReady()) {
        dialog.showErrorBox("Error: ", message);
      }
    });
  }
}
