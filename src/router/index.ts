import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue';
import PrivateLayout from '../layouts/PrivateLayout.vue';
Vue.use(VueRouter)


const routes = [
  {
    path: "/",
    name: "ListToDo",
    expact: true,
    component: () => import("../components/listToDoVuex.vue"),
    meta:{layout:DefaultLayout}
  },
  {
    path: '/home',
    name: 'home',
    exact:true,
    component: () => import("../components/home.vue"),
    meta:{layout:DefaultLayout}
    

  },
  {
    path: "/ListToDo/:id",
    name: "Detail",
    expact: true,
    component: () => import("../components/Detail.vue"),
    meta:{layout:DefaultLayout}
    

  },
  {
    path: "/Cart", 
    name: "Cart",
    component: () => import("../components/cart.vue"),
    meta:{layout:DefaultLayout ,requiresAuth:true}
    
  },
  {
    path: "/register",
    name: "Payment",
    component: () => import("../components/register.vue"),
    meta:{layout:DefaultLayout}
    
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/login.vue"),
    meta:{layout:DefaultLayout}
    
  }, {
    path: "/404",
    name: "Error",
    component: () => import("../components/error.vue"),
    meta:{layout:DefaultLayout}
    
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/admin.vue"),
    meta:{layout:PrivateLayout,isAdmin:true,requiresAuth:true,authorize:"admin"}

  },
  {
    path: "*",
    redirect:"/404" 
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next)=>{
//   const authRequired = to.matched.some(x => x.meta.requiresAuth)
//   const isAdmin = to.matched.some(x => x.meta.isAdmin)
//   const loggedIn = JSON.parse(localStorage.getItem('user'));
 
//   if (!loggedIn) {
//     if(authRequired){
//      return  next("/login")
//     }
//     else next()
//   }
//   else {
//     if(to.path=="/login") return next("/")
//     if(authRequired && isAdmin ){
//       if( loggedIn?.role==="admin")next()
//       else  next("/")
//     }else next()
//   }
  
// })

export default router