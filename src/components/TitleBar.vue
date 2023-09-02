<template>
    <div class="topcon">
        <div class="topTitle">{{props.name}}</div>
        <div class="btnFloatRight">
            <el-button type="info" :icon="Close" circle @click="closeWin"/>
        </div>
    </div>
</template>
<script setup>
import {Close} from '@element-plus/icons-vue'
const {ipcRenderer}=window.electronAPI
const props=defineProps({
    name:{
        type:String,
        default:''
    }
})
const closeWin = () => {
    ipcRenderer.send('close-window')
}
</script>
<style scoped>
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
    color:#cecece;
    font-weight: 600;
    width:100%;
    text-align: center;
}
</style>