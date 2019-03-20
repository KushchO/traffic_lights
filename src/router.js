import Vue from 'vue'
import Router from 'vue-router'
import TrafficLights from './components/TrafficLights.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '',
      name: 'Red',
      component: TrafficLights
    },
    {
      path: '/1',
      name: 'Yellow',
      component: TrafficLights
    },
    {
      path: '/2',
      name: 'Green',
      component: TrafficLights
    }
  ]
})
