<template>
    <img :src="svg" alt="SVG Image" :style="`width: ${width}px; height: ${height}px`">    
</template>
<script setup>
import {ref} from 'vue'
const svg=ref('')
const props=defineProps({
    name:{
        type: String,
        default: ''
    },
    width: {
      type: Number,
      default: 60
    },
    height: {
      type: Number,
      default: 60
    }
})
svg.value=require('@/assets/svg/'+props.name+'.svg')
</script>
<style scoped>
</style>