'use strict'

import { app, protocol, BrowserWindow ,ipcMain,dialog,BrowserView,Menu} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require('path')
const { autoUpdater } = require('electron-updater');
autoUpdater.autoDownload = false;         // 禁用自动下载更新
autoUpdater.autoInstallOnAppQuit = false; // 禁用应用程序退出后自动安装更新

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

let winNums=0;
let mainWin=null;

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 400,
    backgroundColor: '#2e2c29',
    titleBarStyle: 'hiddenInset', 
    alwaysOnTop:true,
    center: true,
    useContentSize:true,
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
async function showProgress(value){
    if(mainWin==null){
        mainWin=await createWindow();
        mainWin.webContents.send('progress',value);
    }else{
        mainWin.webContents.send('progress',value);
    }
}
app.on('ready', async () => {
    mainWin=await createWindow()
    consoleLog("----------App ready---------")
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
    if (BrowserWindow.getAllWindows().length === 0 && mainWin==null) createWindow()
})


autoUpdater.on('update-available', () => {
    consoleLog("Update available---------")

    dialog.showMessageBox(mainWin,{
        type: 'info',
        title: '更新提示',
        message: '软件需要更新，您是否立即更新？',
        buttons: ['确定升级', '关闭']
    }).then((res) => {
        consoleLog('index:' + res.response)
        if (res.response === 0) {
            consoleLog('选择升级')
            autoUpdater.downloadUpdate().then(r => {}).catch(e => console.log(e))
        } else {
            consoleLog('选择不升级:')
            app.quit();
        }
    })
});
autoUpdater.on('download-progress', function (progressObj) {
    consoleLog('下载进度信息'+(progressObj.percent))
    let percentNum=progressObj.percent
    showProgress(percentNum.toFixed(2))
    mainWin.setProgressBar(progressObj.percent);

})  
autoUpdater.on('update-downloaded', () => {
    consoleLog("Update downloaded---------")
    consoleLog('下载完毕！提示安装更新')

    dialog.showMessageBox(mainWin,{
        type: 'info',
        title: '升级提示！',
        message: '已自动升级为最新版，请等待程序安装完成并重启应用！',
    }).then((res) => {
        consoleLog('确认安装')
        setImmediate(() => autoUpdater.quitAndInstall(true, true))
    })
});


 