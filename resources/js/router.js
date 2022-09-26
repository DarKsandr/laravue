import { createRouter, createWebHashHistory } from "vue-router"
import Home from './View/Home.vue'
import Login from './View/Login.vue'
import Users from './View/Users.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/users', component: Users },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})