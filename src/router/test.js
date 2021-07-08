import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout';
import PrivateLayout from '../layouts/PrivateLayout';
Vue.use(VueRouter)

const rules = JSON.parse(localStorage.getItem("rules"))
console.log(rules)
const routes = [
  {
    path: "*",
    redirect:"/404" 
  },

  {
    path: "",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "ListToDo",
        expact: true,
        component: () => import("../components/listToDoVuex.vue"),
      },
      {
        path: '/home',
        name: 'home',
        exact:true,
        component: () => import("../components/home.vue"),
        
      },
      {
        path: "/ListToDo/:id",
        name: "Detail",
        expact: true,
        component: () => import("../components/Detail"),
      },
      {
        path: "/Cart",
        name: "Cart",
        component: () => import("../components/cart"),
        
      },
      {
        path: "/register",
        name: "Payment",
        component: () => import("../components/register"),
      },
      {
        path: "/404",
        name: "Error",
        component: () => import("../components/error"),
      },
    ]
  },
  {
    path: "",
    name: "PrivateLayout",
    component: PrivateLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("../components/login"),
        
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router