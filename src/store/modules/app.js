const app={
    namespaced: true,
    state:{
      iscollapse:false,
      title:'newcook'
    },
    getters:{
      getTitle:()=>state.title
    },
    mutations:{
      setAppTitle(state,value){
          state.title=value;
      }
    },
    actions:{
    }
}
export default app