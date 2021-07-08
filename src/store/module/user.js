import axios from "axios";

const baseUrl = "http://localhost:3000/listUser";

// eslint-disable-next-line no-unused-vars
const sleep = (time) => new Promise((resolve, _reject) => setTimeout(resolve, time))

const userModules = {
    state: {
        isLoad: true,
        user: [],
        isAuth:false,
    },
    getters: {
        isAuth: state => 
            state.isAuth
    },
    actions: {
        async createUser({ commit }, action) {
                const {email} = action
                try {
                    const response = await axios.get(`${baseUrl}?email=${email}`)
                    if (response.data.length===0) {
                        const res = await axios.post(`${baseUrl}`, action)
                        await sleep(1000);
                        commit("CREATE_SUCCESS", res.data)
                    }
                    else {
                        commit("CREATE_FAILER")
                    }
                } catch (error) {
                    commit("CREATE_FAILER")

                }
        },
        async login({ commit }, action) {
            console.log("🚀 ~ file: user.js ~ line 38 ~ login ~ action", action)
            const { email ,password} = action
            try {
                const response = await axios.get(`${baseUrl}?email=${email}&password=${password}`)
                console.log("🚀 ~ file: user.js ~ line 42 ~ login ~ response", response)
                if (response.data.length === 0) {
                    commit("LOGIN_FAILER",[])
                    
                }
                else {
                    commit("LOGIN_SUCCESS", response.data)
                }
            } catch (error) {
                commit("LOGIN_FAILER",[])
                
            }
        }
    },
    mutations: {
        CREATE_FAILER(state) {
            state.user = []
            state.isAuth=false
        },
        CREATE_SUCCESS(state, payload) {
            state.user = payload
            state.isAuth=true
        },
        LOGIN_FAILER(state) {
            state.user = []
            state.isAuth=false
        },
        LOGIN_SUCCESS(state, payload) {
            state.user = payload
            state.isAuth=true
        }

    }
}
export default userModules;