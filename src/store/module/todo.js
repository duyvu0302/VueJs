import axios from "axios"
// eslint-disable-next-line no-unused-vars
const sleep = (time) => new Promise((resolve, _reject) => {
    setTimeout(resolve, time);
});

const baseUrl = "http://localhost:3000/tasks";
const todoModules = {
    state: {
        tasks: [],
        errors: '',
        taskDone: [],
        isLoad:false
    },
     getters: {
         tasks: state => state.tasks,
         taskDone: state => state.tasks.filter(item => item.completed),
         isLoad:state => state.isLoad
    },
    actions: {
        async getTask({ commit }, action) {
        console.log("🚀 ~ file: todo.js ~ line 23 ~ getTask ~ action", action)
            
            const {page,completed} = action
            try {
                const response = await axios({
                    url: baseUrl,
                    method: 'GET',
                    params: {
                        ...(page && { _page: page }),
                         _limit: 5 ,
                        ...(completed &&{completed:true}),
                    }
                })
                await sleep(1000);
                commit("GET_TASK", response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async createTask({commit},action){
            try {
                const response = await axios.post(`${baseUrl}`, action)
                commit("POST_TASK",response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async deleteTask({commit},action){
            try {
                await axios.delete(`${baseUrl}/${action.id}`)
                commit("DELETE_TASK",action.id)
            } catch (error) {
                console.log(error)
            }
        },
        async editTask({ commit }, action) {
            try {
                const { id, title } = action;
                const response = await axios.patch(`${baseUrl}/${id}`, {
                    title
                })
                commit("EDIT_TASK",response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async completeTask({ commit },action) {
            try {
                await axios.patch(`${baseUrl}/${action.id}`, {
                    completed: !action.completed
                })
                commit("TASK_DONE",action)
            } catch (error) {
                console.log(error)
            }
        },
        async getTaskDetails({ commit }, action) {
            try {
                const response = await axios.get(`${baseUrl}/${action.id}`)
                commit("GET_DETAIL",response.data)
            } catch (error) {
                console.log(error)
            }
        }
    },
    mutations: {
        GET_TASK(state,payload) {
            state.tasks = payload
            state.taskDone = state.tasks.filter(item => item.completed)

        },
        POST_TASK(state, payload) {
            state.tasks.unshift(payload)
        },
        DELETE_TASK(state, payload) {
            let index = state.tasks.findIndex((item)=>item.id ===payload)
            if(index !== -1)
            state.tasks.splice(index,1)
        },
        EDIT_TASK(state, payload) {
            console.log("🚀 ~ file: todo.js ~ line 102 ~ EDIT_TASK ~ payload", payload)
            let index = state.tasks.findIndex(item => item.id === payload.id)
            if (index !== -1)
                state.tasks.splice(index,1,{...payload,title: payload.title})
        },
        TASK_DONE(state, payload) {
            let index = state.tasks.findIndex(item => item.id === payload.id)
            state.tasks.splice(index, 1, { ...payload, completed: !payload.completed })
            state.taskDone = state.tasks.filter(item => item.completed)
        },
        GET_DETAIL(state, payload) {
            state.tasks=payload
        }
    }
}
export default todoModules;