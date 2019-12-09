import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'
import S from '../pages/s.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/s',
          component: S
        }
      ]
    },
    {
      path:'/',
      redirect:'/login'
    }
  ]
})
