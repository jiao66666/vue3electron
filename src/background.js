'use strict'

import { app, protocol, BrowserWindow ,ipcMain} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import doLog from './tools/log.js'
const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require('path')
const { autoUpdater } = require('electron-updater');

doLog("fuck")
autoUpdater.on('update-available', () => {
    log.info('update available');
});
  
autoUpdater.on('update-downloaded', () => {
    log.info("download finished")
});

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

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
    win.loadURL('app://./index.html')
    win.webContents.openDevTools()
  }
}

app.on('ready', async () => {
    autoUpdater.checkForUpdatesAndNotify();

    createWindow()

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


 