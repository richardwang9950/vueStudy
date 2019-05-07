import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: 'login ' */ '@/components/demo/login')
    },
    {
      path: '/checkboxs',
      name: 'checkboxs',
      component: () => import(/* webpackChunkName: 'checkboxs ' */ '@/components/demo/checkboxs')
    },
    {
      path: '/radios',
      name: 'radios',
      component: () => import(/* webpackChunkName: 'radios ' */ '@/components/demo/radios')
    },
    {
      path: '/selectd',
      name: 'selectd',
      component: () => import(/* webpackChunkName: 'selectd ' */ '@/components/demo/selectd')
    },
    {
      path: '/father',
      name: 'father',
      component: () => import(/* webpackChunkName: 'father ' */ '@/components/sendData/father')
    },
    {
      path: '/fatherTwo',
      name: 'fatherTwo',
      component: () => import(/* webpackChunkName: 'fatherTwo ' */ '@/components/sonToFather/fatherTwo')
    },
    {
      path: '/TestVuex',
      name: 'TestVuex',
      component: () => import(/* webpackChunkName: 'TestVuex ' */ '@/components/vuexCom/TestVuex')
    }
  ]
})
