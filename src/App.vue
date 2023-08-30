<template>
  <div id="mainMenu"> 
    <div class="btnFloatRight">
        <el-button type="danger" :icon="Close" circle @click="closeWin"/>
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
               <el-card shadow="hover" body-class="danger"> 关闭炒菜机 </el-card>
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
  </div>    
</template>
<script setup>
const { ipcRenderer }  = window.electron;

import {Close} from '@element-plus/icons-vue'
function closeWin(){
    ipcRenderer.send('close-window')
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
    text-align: right;
    margin-bottom: 30px;
}
</style>