import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "ListToDo",
    expact: true,
    component: ()=> import ("../components/listToDoVuex.vue")

  },
  {
    path: '/home',
    name: 'home',
    exact:true,
    component: ()=> import ("../components/home.vue")

  },
  {
    path: "/ListToDo/:id",
    name: "Detail",
    expact: true,
    component: ()=> import ("../components/Detail")

  },
  {
    path: "/Cart",
    name: "Cart",
    component: ()=> import ("../components/cart")
  },
  {
    path: "/register",
    name: "Payment",
    component: () => import ("../components/register")
  },
  {
    path: "/login",
    name: "Login",
    component: ()=> import ("../components/login")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router