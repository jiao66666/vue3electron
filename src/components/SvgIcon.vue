<template>
    <img :src="svg" alt="SVG Image" class="menuicon">    
</template>
<script setup>
import {ref} from 'vue'
const svg=ref('')
const props=defineProps({
    name:{
        type: String,
        default: ''
    }
})
svg.value=require('@/assets/svg/'+props.name+'.svg')
</script>
<style scoped>
.menuicon{
    width:60px;
    height:60px;
}
</style>