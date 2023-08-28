const task={
    namespaced: true,
    state:{
      canRecvplate:false,
      canDeliverplate:false 
    },
    getters:{
       getRecvplate:()=>state.canRecvplate
    },
    mutations:{
      setRecvplate(state,val){
         state.canRecvplate=val
      }
    },
    actions:{

    }
}
export default task