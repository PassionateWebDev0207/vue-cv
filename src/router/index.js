import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Home from '@/views/index.vue'

Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

export default router