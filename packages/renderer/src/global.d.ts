export {};

export interface electronAPI {
  startDrag: (filename: string) => void;
}

declare global {
  interface Window {
    // Expose some Api through preload script
    fs: typeof import("fs");
    ipcRenderer: import("electron").IpcRenderer;
    electron: electronAPI;
    removeLoading: () => void;
  }
}
