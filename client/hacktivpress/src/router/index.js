import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: Articles
        }
      ]
    }
  ]
})
