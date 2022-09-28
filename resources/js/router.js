import { createRouter, createWebHashHistory } from "vue-router"
import Home from './View/Home.vue'
import Login from './View/Login.vue'
import Register from './View/Register.vue'
import Users from './View/Users.vue'
import {useTokenStore} from '@/store/token';

const authGuard = (to, from) => {
  const token = useTokenStore();
  if(!token.isAuth) return {name: "login"};
};

const routes = [
  { 
    path: '/', 
    component: Home,
    name: "home",
  },
  { 
    path: '/login', 
    component: Login,
    name: "login",
  },
  { 
    path: '/register', 
    component: Register,
    name: "register",
  },
  { 
    path: '/users', 
    component: Users,
    name: "users",
    beforeEnter: authGuard,
  },
]

export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})