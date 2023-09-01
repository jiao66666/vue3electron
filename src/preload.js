const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  ipcRenderer,
  onLog: (callback) => ipcRenderer.on('log', callback)
});
