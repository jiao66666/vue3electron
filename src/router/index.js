import { createRouter, createWebHashHistory } from 'vue-router'

const myRouters=[
    {
        path:"/",name:"index",component:()=>import("../views/pageA/index.vue")
    },
    {
        path:"/pageA",name:"pageA",component:()=>import("../views/pageA/index.vue")
    },
    {
        path:"/pageB",name:"pageB",component:()=>import("../views/pageB/index.vue")
    }
]
const router = createRouter({
   history: createWebHashHistory(),
   routes: myRouters
})

export default router
