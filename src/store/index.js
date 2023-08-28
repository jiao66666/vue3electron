import {createStore} from 'vuex'
import user from './modules/user'
import app from './modules/app'
import task from './modules/task'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    modules: {
      user: user,
      app: app,
      task: task
    },
    plugins: [createPersistedState()]

})

export default store