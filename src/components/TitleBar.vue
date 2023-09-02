<template>
   <div class="topconfix">
        <div class="topcon">
            <div class="topTitle">{{props.name}}</div>
            <div class="btnFloatLeft" @click="goBack" v-if="isShowBackBtn">
                <SvgIcon name="back" :width="30" :height="30"/>
            </div>
        </div>
   </div>   
</template>
<script setup>
import SvgIcon from '@/components/SvgIcon'
import router from '@/router'
import {ref,watch} from 'vue'
import { useRoute } from 'vue-router'

const isShowBackBtn=ref(false)
const props=defineProps({
    name:{
        type:String,
        default:''
    }
})
const goBack=()=>{
    router.back()
}
const route = useRoute()
watch(() => route.path, (newPath) => {
    isShowBackBtn.value = newPath !== '/'
})

</script>
<style scoped>
.btnFloatLeft{
    position: absolute;
    top:0;
    left:20px;
}
.topconfix{
    width:100%;
    position:fixed;
    left:0;
    top:0;
    z-index:99999;
}
.topcon{
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10px;
    position: relative;
    align-items: center;
    height:32px;
    width:100%;
}
.topTitle{
    font-size:20px;
    color:#cecece;
    font-weight: 600;
    width:100%;
    text-align: center;
}
</style>