<template>
   <div>
        <TitleBar name="极傲-全自动炒菜机"/>
        <router-view></router-view>  
   </div>  
</template>
<script setup>
import TitleBar from '@/components/TitleBar.vue'
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>