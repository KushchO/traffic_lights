<template>
  <div class="traffic-light">
  <ul class="traffic-light__list">
    <RedLight :colorRed="colorRed"/>
    <YellowLight :colorYellow="colorYellow"/>
    <GreenLight :colorGreen="colorGreen"/>
  </ul>
</div>
</template>

<script>
import RedLight from '@/components/RedLight.vue'
import YellowLight from '@/components/YellowLight.vue'
import GreenLight from '@/components/GreenLight.vue'
import router from '@/router'

export default {
  router,
  name: 'TrafficLights',
  components: {
    RedLight,
    YellowLight,
    GreenLight
  },
  data: function () {
    return {
      routeIndex: 0,
      colorRed: 'grey',
      colorYellow: 'grey',
      colorGreen: 'grey',
      traffTimeout: [
        3000,
        2000,
        4000
      ]
    }
  },
  created () {
    const routes = this.$router.options.routes
    let traffTimeout = this.traffTimeout[this.routeIndex]
    let routeIndex = this.routeIndex
    const router = this.$router
    let colorRed = this.colorRed
    let colorYellow = this.colorYellow
    let colorGreen = this.colorGreen
    const startLight = function () {
      setTimeout(() => {
        console.log(routes[routeIndex].path)
        console.log(colorRed)
        console.log(traffTimeout)
        // Цвет светофора в зависимотси от this.routes[this.routeIndex].path. Таймер выставляю тоже отнасительно this.routeIndex
        routes[routeIndex].path === '' ? colorRed = 'red' : colorRed = 'grey'
        routes[routeIndex].path === '/1' ? colorYellow = 'yellow' : colorYellow = 'grey'
        routes[routeIndex].path === '/2' ? colorGreen = 'green' : colorGreen = 'grey'
        router.push(routes[routeIndex])
        routeIndex = (routeIndex + 1) % routes.length
      }, traffTimeout)
      startLight()
    }
    startLight()
  }
}
</script>

<style scoped lang="scss">
/*traffic-light */

traffic-light {
  display: flex;
}

.traffic-light__list {
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #2c3e50;
  border: 3px solid #000000;
  border-radius: 5px;
  width: 100px;
  margin: auto;
}

.traffic-light__item {
  width: 100px;
  height: 100px;
  background-color: gray;
  border-radius: 50%;

  &--red {
    background-color: red;
  }

  &--yellow {
    background-color: yellow;
  }

  &--green {
    background-color: green;
  }
}

.traffic-light__item:not(:last-child) {
  margin-bottom: 20px;
}
</style>
