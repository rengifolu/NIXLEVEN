import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Music from '@/components/Music'
import Portfolio from '@/components/Portfolio'
import ImagenLetras from '@/components/ImagenLetras'
import Go from '@/components/Go'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/ImagenLetras',
      name: 'ImagenLetras',
      component: ImagenLetras
    },
    {
      path: '/Go',
      name: 'Go',
      component: Go
    }
  ]
})
