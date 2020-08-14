import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tab',
      component: () => import('@/components/tab')
    },
    {
      path: '/love',
      name: 'love',
      component: () => import('@/components/love')
    }
  ]
})
