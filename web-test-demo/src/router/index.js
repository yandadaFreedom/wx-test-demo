import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
const routes = [{
  path: '/index',
  name: 'Home',
  component: Home,
}, {
  path: '*',
  redirect: '/index'
}]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
export default router
