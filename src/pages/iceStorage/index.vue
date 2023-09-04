<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="row" label="行号" width="180" />
        <el-table-column prop="colume" label="列号" width="180" />
        <el-table-column prop="stock" label="库存数" width="180"/>
    </el-table>
</template>
<script setup>
let tableData = []
for(let row=1;row<=4;row++){
    for(let colume=1;colume<=4;colume++){
        let stock = Math.floor(Math.random() * 10) + 1;
        tableData.push({
            row,
            colume,
            stock
        })
    }
}
</script>
