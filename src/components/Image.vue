<template>
    <img :src="imgUrl" alt="" class="img">
</template>
<script setup>
import {ref} from 'vue'
const imgUrl=ref('')
const props=defineProps({
    name:{
        type:String,
        default:''
    }
})
imgUrl=require("@/assets/img/"+props.name)
</script>
<style scoped>
.img{
    display: block;
    width:100%;
}
</style>