<template>
    <div id="pageA">
        <div>This is pageA-userStorePage</div>
        <div>当前name值{{name}},当前age值{{age}},当前getname值:{{getname}}</div>
       
        <el-button type="primary" @click="changeName">修改userName</el-button>
        <el-button type="primary" @click="changeAge">修改userAge</el-button>
        <el-button type="primary" @click="changeBackName">修改userBackName[usingAction]</el-button>
   </div> 
 </template>
 
 <script setup>
 import {computed,ref} from 'vue'
 import store from '../../store/index.js'
 const name=computed(()=>store.state.user.name)
 const age=computed(()=>store.state.user.age)
 const getname=computed(()=>store.getters['user/getName'])

 function changeName(){
    store.commit("user/setName","Myname is new,notTom")
 }
 function changeAge(){
    store.commit("user/setAge",28)
 }
 function changeBackName(){
    store.dispatch("user/changeBackName")
 }
 </script>

 <style>
 .btn{border:1px solid #ccc; border-radius: 20px;}
 </style>
 