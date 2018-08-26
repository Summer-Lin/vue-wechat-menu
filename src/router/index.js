import Vue from 'vue'
import Router from 'vue-router'
import PublicAccountManagement from '@/components/PublicAccountManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PublicAccountManagement',
      component: PublicAccountManagement
    }

  ]
})
