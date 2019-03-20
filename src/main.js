import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Router from 'vue-router'
import TrafficLights from './components/TrafficLights.vue'
Vue.use(Router)

Vue.config.productionTip = false
const routes = [
  { path: '/', component: TrafficLights },
  { path: '/1', component: TrafficLights },
  { path: '/2', component: TrafficLights }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

new Vue({
  router: router,
  store,
  data: {
    routeIndex: 0
  },
  created () {
    setInterval(() => {
      const routes = this.$router.options.routes
      this.$router.push(routes[this.routeIndex])
      this.routeIndex = (this.routeIndex + 1) % routes.length
    }, 1000)
  },
  render: h => h(App)
}).$mount('#app')
