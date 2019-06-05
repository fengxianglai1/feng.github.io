import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/Table'
import Echars from '@/components/Echars'
import _Vuex from '@/components/Vuex'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/echars',
      name: 'Echars',
      component: Echars
    },
    {
      path: '/vuex',
      name: '_Vuex',
      component: _Vuex
    }
  ]
})
