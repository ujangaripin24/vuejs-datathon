import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/User/DashboardView.vue'
import SettingsView from '../views/User/SettingView.vue'
import RegisterView from '../views/Register/RegisterView.vue'
import DataKkView from '../views/User/DataKkView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/user/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/user/setting',
    name: 'setting',
    component: SettingsView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/user/data_kk',
    name: 'data_kk',
    component: DataKkView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
