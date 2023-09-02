<template>
  <div id="mainMenu"> 
    <TitleBar name="极傲-全自动炒菜机"/>
    <div class="maincon">
        <MenuItem iconName="1" titleName="加热"/>
        <MenuItem iconName="2" titleName="炒菜"/>
        <MenuItem iconName="3" titleName="冰柜"/>
        <MenuItem iconName="4" titleName="存储"/>
        <MenuItem iconName="5" titleName="送盘"/>
        <MenuItem iconName="6" titleName="洗碗"/>
        <MenuItem iconName="7" titleName="出菜"/>
        <MenuItem iconName="8" titleName="撕膜"/>
        <MenuItem iconName="9" titleName="加料"/>
        <MenuItem iconName="10" titleName="关闭"/>
    </div>
  </div>    
</template>
<script setup>
import TitleBar from '@/components/TitleBar.vue'
import MenuItem from '@/components/MenuItem.vue'
const {onLog,onProgress}=window.electronAPI
onLog((_event, value) => {
      console.log("I'm in renderer")
      console.log(value)
})
onProgress((_event, percentage) => {
      if(progressDialogVisible.value!=true) progressDialogVisible.value=true
      percentageVal.value=percentage 
})
</script>
<style>
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