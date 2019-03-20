import Vue from 'vue'
import Router from 'vue-router'
import TrafficLights from './components/TrafficLights.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Red',
      component: TrafficLights
    },
    {
      path: '/2',
      name: 'Yellow',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/TrafficLights.vue')
    },
    {
      path: '/3',
      name: 'Green',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/TrafficLights.vue')
    }
  ]
})
