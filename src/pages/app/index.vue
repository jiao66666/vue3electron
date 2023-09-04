<template>
  <div id="mainMenu"> 
    <div class="maincon">
        <MenuItem iconName="1" titleName="菜谱" @click="goPage('/dishMenu')"/>
        <MenuItem iconName="2" titleName="冰柜" @click="goPage('/iceStorage')"/>
        <MenuItem iconName="3" titleName="加热"/>
        <MenuItem iconName="4" titleName="存储"/>
        <MenuItem iconName="5" titleName="送盘"/>
        <MenuItem iconName="6" titleName="洗碗"/>
        <MenuItem iconName="7" titleName="出菜"/>
        <MenuItem iconName="8" titleName="撕膜"/>
        <MenuItem iconName="9" titleName="加料"/>
        <MenuItem iconName="10" titleName="关闭" @click="closeWin"/>
    </div>
  </div>    
</template>
<script setup>
import MenuItem from '@/components/MenuItem.vue'
import router from '@/router'

const {onLog,onProgress,ipcRenderer}=window.electronAPI
onLog((_event, value) => {
      console.log("I'm in renderer")
      console.log(value)
})
onProgress((_event, percentage) => {
      if(progressDialogVisible.value!=true) progressDialogVisible.value=true
      percentageVal.value=percentage 
})

const goPage = (path) => {      
    router.push(path)
}
const closeWin = () => {
    ipcRenderer.send('close-window')  
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mainMenu{
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;
}
.maincon{
    display: flex;
    flex-flow: row wrap;
}
</style>