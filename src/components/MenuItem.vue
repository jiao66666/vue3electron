<template>
    <div class="menucon" @click="showMsg('加热')">
        <div class="menuiconcon"><SvgIcon :name="props.iconName" /></div>
        <div class="menutitlecon"><span class="menutitle">{{props.titleName}}</span></div>
    </div>
</template>
<script setup>
import SvgIcon from "./SvgIcon";
const props=defineProps({
    iconName:{
        type:String,
        default:''
    },
    titleName:{
        type:String,
        default:''
    } 
})
const showMsg = (msg) => {
     console.log(msg)
}
</script>
<style scoped>

.menucon{
    display: flex;
    flex-flow:column nowrap;
    width:20%;
    align-items: center;
    justify-content: center;
    margin-top:35px;
}

.menutitlecon{
    display: flex;
    flex-flow:row nowrap;
    align-items: center;
}
.menutitle{
    font-size:16px;
    color:#cecece;
}
</style>