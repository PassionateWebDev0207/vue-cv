import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Home from '@/views'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      redirect:'/about',
      children: [
        {
          path: '/about',
          name: 'About',
          component: About,
          meta: {
            title:'Jimmy Yu'
          }
        },
        {
          path: '/portfolio',
          name: 'Portfolio',
          component: Portfolio,
          meta: {
            title:'Portfolio | Jimmy Yu'
          }
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
          meta: {
            title:'Contact me | Jimmy Yu'
          }
        }
      ]
    },
  ]
})

router.afterEach(route => {
	document.title = route.meta.title;
})

export default router