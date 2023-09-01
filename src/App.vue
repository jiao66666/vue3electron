<template>
  <div id="mainMenu"> 
    <div class="topcon">
        <div class="topTitle">极傲-全自动炒菜机</div>
        <div class="btnFloatRight">
            <el-button type="danger" :icon="Close" circle @click="closeWin"/>
        </div>
    </div>
    <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>设备总开关</span>
          </div>
        </template>
        <el-row :gutter="24">
            <el-col :span="12">
                <el-card shadow="hover" body-class="primary"> 启动炒菜机 </el-card>
            </el-col>
            <el-col :span="12">
               <el-card shadow="hover" body-class="danger" > 关闭炒菜机 </el-card>
            </el-col>
        </el-row>
    </el-card>
    <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>洗碗机模块</span>
          </div>
        </template>
        <el-row :gutter="24">
            <el-col :span="12">
                <el-card shadow="hover" body-class="primary"> 启动洗碗机 </el-card>
            </el-col>
            <el-col :span="12">
               <el-card shadow="hover"  body-class="danger"> 关闭洗碗机 </el-card>
            </el-col>
        </el-row>
    </el-card>
    <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>送盘模块</span>
          </div>
        </template>
        <el-row :gutter="24">
            <el-col :span="12">
                <el-card shadow="hover" body-class="primary"> 启动送盘 </el-card>
            </el-col>
            <el-col :span="12">
               <el-card shadow="hover"  body-class="danger"> 关闭送盘 </el-card>
            </el-col>
        </el-row>
    </el-card>
    <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>测试模块</span>
          </div>
        </template>
        <el-row :gutter="24">
            <el-col :span="4">
                <el-card shadow="hover" body-class="primary"  @click="openMachine"> 测试连接 </el-card>
            </el-col>
            <el-col :span="4">
               <el-card shadow="hover"  body-class="danger" @click="openWebView"> 测试Webview窗口 </el-card>
            </el-col>
            <el-col :span="4">
                <el-input v-model="webUrl" placeholder="请输入网址" />
                <el-card shadow="hover"  body-class="danger" @click="openBrowWindow"> 测试openBrowWindow窗口 </el-card>
             </el-col>
             <el-col :span="4">
                <el-input v-model="percentageVal" placeholder="请输入进度条值" />
                <el-progress :percentage="percentageVal" :stroke-width="15" striped striped-flow text-inside />
             </el-col>
             <el-col :span="4">
                <el-card shadow="hover" body-class="primary"  @click="popProgress"> 弹出进度条框 </el-card>
             </el-col>
        </el-row>
    </el-card>
    <el-dialog v-model="progressDialogVisible" :show-close="false" :close-on-click-modal="false" :align-center="true">
        <template #header="{titleClass}">
            <div class="my-header">
                <h4 :class="titleClass">安装进度</h4>
              </div>
        </template>
        <el-progress :percentage="percentageVal" :stroke-width="15" striped striped-flow text-inside />
    </el-dialog>
  </div>    
</template>
<script setup>
import {Close} from '@element-plus/icons-vue'
import { ref } from 'vue';
const webUrl=ref('https://www.163.com')
const percentageVal=ref(0)
const progressDialogVisible=ref(false)
const {ipcRenderer,onLog,onProgress} = window.electronAPI
onLog((_event, value) => {
      console.log("I'm in renderer")
      console.log(value)
})
onProgress((_event, percentage) => {
      if(progressDialogVisible.value!=true) progressDialogVisible.value=true
      percentageVal.value=percentage 
})
function closeWin(){
    ipcRenderer.send('close-window')
}
function openMachine(){
    console.log("Open machine")
}
function openWebView(){
    ipcRenderer.send('open-webview-window')
}
function openBrowWindow(){
    console.log(webUrl.value)
    ipcRenderer.send('open-browwindow',{webUrl:webUrl.value})
}
function popProgress(){
    progressDialogVisible.value=true
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.primary{
  background-color: #337ecc;
  color:#ffffff;
}
.danger{
   background-color: #c45656; 
   color:#ffffff;
}
.btnFloatRight{
    position: absolute;
    top:0;
    right:0;
}
.topcon{
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 30px;
    position: relative;
    align-items: center;
    height:32px;
}
.topTitle{
    font-size:20px;
    color:#333333;
    font-weight: 600;
    width:100%;
    text-align: center;
}
</style>