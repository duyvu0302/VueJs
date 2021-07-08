import Vue from "vue";
import Vuex from "vuex";
import  todoModules  from "./module/todo";
import  userModule  from "./module/user";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        todoModules,
        userModule
        
    }
})
export default store