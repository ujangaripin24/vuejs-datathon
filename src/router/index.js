import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/User/DashboardView.vue'
import SettingsView from '../views/User/SettingView.vue'
import RegisterView from '../views/Register/RegisterView.vue'
import DataKkView from '../views/User/DataKkView.vue'
import DataSRTView from '../views/User/DataSRTView.vue'

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
    path: '/user/data_kk',
    name: 'data_kk',
    component: DataKkView
  },
  {
    path: '/user/data_srt',
    name: 'data_srt',
    component: DataSRTView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
