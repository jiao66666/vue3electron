<template>
    <el-row>
        <el-col :span="24">      
            <el-radio-group v-model="connectStatus" size="large">
                <el-radio-button label="clientConnected" />连接已开启
                <el-radio-button label="clientDisconnected" />连接已断开
            </el-radio-group>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12">      
            <el-button type="primary" @click="doReceive">测试接受服务端消息</el-button>
       </el-col>
       <el-col :span="12">
           <el-tag class="ml-2" type="danger">接收到消息:{{recvmsg}}</el-tag>
       </el-col>
    </el-row>
    <el-row>
        <el-col :span="12">      
            <el-input v-model="sendmsg" placeholder="请输入发送的消息" />
            <el-button type="primary" @click="doSend">测试发送服务端消息</el-button>
       </el-col>
       <el-col :span="12">
           <el-tag class="ml-2" type="danger">发送消息:{{sendmsg}}</el-tag>
       </el-col>
    </el-row>
       
</template>

<!-----------此处为和mqtt中间站通讯代码 ------------------->
<script setup>
const mqtt = require('mqtt')
import {ref} from 'vue'
let client=null
const recvmsg=ref("")
const sendmsg=ref("")
const connectStatus=ref("")
comInit()
function comInit(){
       const options = {
            clean: true, 
            connectTimeout: 4000, 
            clientId: 'test001',
            username: 'admin',
            password: 'public',
        }
        const connectUrl = 'ws://192.168.32.98:8083/mqtt'
        client = mqtt.connect(connectUrl, options)
        client.subscribe('testtopic/#');
        client.subscribe('cc/#');
        console.log(client.connected)
        
}
function doReceive(){
        client.on('reconnect', (error) => {
            console.log('reconnecting:', error)
        })

        client.on('error', (error) => {
            console.log('Connection failed:', error)
        })

        client.on('message', (topic, message) => {
            if (client.connected){
               connectStatus.value='clientDisconnected'
            }else{
                connectStatus.value='clientDisconnected'
            } 
            console.log('receive message：', topic, message.toString())
            recvmsg.value+=message.toString()
        }) 
}

function doSend(){
    if (client.connected) {
            client.publish("testtopic/123", sendmsg.value, {
                 qos: 2,
                 retain: false,
            })
    }
}
</script>

<style>
.mt{margin-top:25px;}
</style>
