import { log } from "console";
import { EventEmitter } from "events";
import { WindowManager } from "./ui/WindowManager";

export class application extends EventEmitter {
  private windowManager: WindowManager | null;

  constructor() {
    super();

    this.windowManager = new WindowManager({ msg: "init", width: 1024, height: 800 });
  }

  // public init(): void {
  //   console.log("application: init()");

  //   this.initWindowManager();
  // }

  // public close(): void {
  //   console.log("application: close()");
  // }

  // public initWindowManager() {
  //   console.log(1111);
  //   this.windowManager = new WindowManager({ msg: "init" });
  // }
}
