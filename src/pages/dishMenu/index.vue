<template>
    <el-tabs tab-position="left"  class="demo-tabs" style="height:330px;">
        <el-tab-pane v-for="item in menuList" :key='item.id' :label="item.title">
            <div><img :src="item.img" class="img"/></div>
            <div class="btncon">
                <div class="btn">
                    <el-button type="primary">确认制作</el-button>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>
<script setup>
import { ref } from 'vue'
import Image from '@/components/Image.vue'
const menuList=ref([
    {id:1,title:'红烧鸡翅',img:'http://121.37.130.1/sample.jpg'},
    {id:2,title:'宫爆鸡丁',img:'http://121.37.130.1/sample2.jpg'},
    {id:3,title:'麻辣火鸡',img:'http://121.37.130.1/sample3.jpg'},  
    {id:4,title:'西湖醋鱼',img:'http://121.37.130.1/sample4.jpg'},   
    {id:5,title:'北京烤鸭',img:'http://121.37.130.1/sample5.jpg'}, 
    {id:6,title:'莲藕香醋',img:'http://121.37.130.1/sample6.jpg'}, 
    {id:7,title:'麻婆豆腐',img:'http://121.37.130.1/sample.jpg'}, 
    {id:8,title:'鲍翅鱼类',img:'http://121.37.130.1/sample.jpg'}, 
    {id:9,title:'火烧机场',img:'http://121.37.130.1/sample.jpg'}, 
    {id:10,title:'奇葩实物',img:'http://121.37.130.1/sample.jpg'}, 
    {id:11,title:'青菜顿小鸡',img:'http://121.37.130.1/sample.jpg'}, 
    {id:12,title:'毛豆海鲜',img:'http://121.37.130.1/sample.jpg'},
])
</script>
<style scoped>
.img{
    display: block ;
    width:100%;
}
.btncon{
    display:flex;
    flex-flow:row wrap;
    align-items: center;
    margin-top:10px;
}
.btn{
    margin-left:auto;
}
</style>
