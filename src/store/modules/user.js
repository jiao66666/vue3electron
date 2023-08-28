const user={
    namespaced: true,
    state:{
      name:'Tom',
      age:18 
    },
    getters:{
      getName:(state)=>state.name,
      getAge:(state)=>state.age
    },
    mutations:{
      setName(state,nameval){
        state.name=nameval
      },
      setAge(state,ageval){
        state.age=ageval
      }
    },
    actions:{
       async changeBackName({commit}){
           setTimeout(()=>{
               commit('setName','Jerry')
            ,1000})
       }
    }
}
export default user