import { createRouter, createWebHashHistory } from 'vue-router'

const myRouters=[
    {
        path:"/",name:"app",component:()=>import("../views/app/index.vue")
    },
    {
        path:"/storeSample",name:"storeSample",component:()=>import("../views/storeSample/index.vue")
    },
    {
        path:"/comSample",name:"comSample",component:()=>import("../views/comSample/index.vue")
    }
]
const router = createRouter({
   history: createWebHashHistory(),
   routes: myRouters
})

export default router
