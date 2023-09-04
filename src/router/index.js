import { createRouter, createWebHashHistory } from 'vue-router'

const myRouters=[
    {
        path:"/",name:"app",component:()=>import("../pages/app/index.vue")
    },
    {
        path:"/storeSample",name:"storeSample",component:()=>import("../pages/storeSample/index.vue")
    },
    {
        path:"/comSample",name:"comSample",component:()=>import("../pages/comSample/index.vue")
    },
    {
        path:"/dishMenu",name:"dishMenu",component:()=>import("../pages/dishMenu/index.vue")
    }
]
const router = createRouter({
   history: createWebHashHistory(),
   routes: myRouters
})

export default router
