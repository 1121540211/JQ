import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: "/",
      redirect: './home',
    },
    {
      path: "/home",
      component:  () => import('@/views/main/Home.vue'),
      children: [
        {
          path: '/',
          redirect: '/home/Welcome',
        },
        {
          path: '/home/Welcome',
          component:() => import('@/views/main/Welcome.vue')
        },
        {
          path: '/home/a',
          component:() => import('@/views/main/a.vue')
        },
        {
          path: '/home/b',
          component:() => import('@/views/main/b.vue')
        }
      ]
    },
  ]
})
