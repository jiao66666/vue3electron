<template>
   <div>
       <img alt="Vue logo" src="./assets/logo.png">
       <HelloWorld msg="Welcome to Your Vue.js App"/>
       <div>{{msg}}</div>
       <div>{{obj.age}}</div>
       <el-button type="warning" @click="doIncreasement()">Test Vu3 Button add</el-button>
       <div @click="changeObj">change Obj.age</div>
       <div><router-link to="/pageA">Go to A page</router-link></div>
       <div><router-link to="/pageB">Go to B page</router-link></div>
       <div @click="jumpPage()"> button to Jump using Vue-router</div>
       <router-view></router-view>
  </div> 
</template>

<script setup>
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import router from './router'
const msg=ref(0)
const obj=ref({
    age:0
})
function doIncreasement(){
    msg.value++;
}
function changeObj(){
    obj.value.age++;
}
function jumpPage(){
    router.push({ path: '/pageC' })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
