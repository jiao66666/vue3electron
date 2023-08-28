import {createStore} from 'vuex'
import user from './modules/user'
import app from './modules/app'
import task from './modules/task'

const store = createStore({
    modules: {
      user: user,
      app: app,
      task: task
    }
})

export default store