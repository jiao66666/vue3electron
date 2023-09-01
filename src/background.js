'use strict'

import { app, protocol, BrowserWindow ,ipcMain} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require('path')
const { autoUpdater } = require('electron-updater');

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

let winNums=0;
let mainWin=null;

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden', // 隐藏窗口标题栏
    center: true,
    fullscreen: true,
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
        nodeIntegration: true,
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true    
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    await win.loadURL('app://./index.html')
    win.webContents.openDevTools()
  }
  winNums++; 
  return win
}
async function consoleLog(msg){
    if(mainWin==null){
        mainWin=await createWindow();
        mainWin.webContents.send('log',msg);
    }else{
        mainWin.webContents.send('log',msg);
    }
}

app.on('ready', async () => {
    createWindow()
    consoleLog("App ready---------")
    autoUpdater.checkForUpdatesAndNotify();
    ipcMain.on('close-window',(event) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        win.close()
    })
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})
  

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})


autoUpdater.on('update-available', () => {
    
});
  
autoUpdater.on('update-downloaded', () => {
    
});


 