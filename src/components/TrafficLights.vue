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
      routeIndex: '',
      searchParams: '',
      colorRed: 'grey',
      colorYellow: 'grey',
      colorGreen: 'grey',
      traffTimeout: [
        15000,
        10000,
        3000
      ]
    }
  },
  watch: {
    '$route.params.search': {
      handler: function (search) {
        console.log(search)
      },
      deep: true,
      immediate: true
    }
  },
  created () {
    const tf = this
    let isStart = true
    const startLight = function () {
      setTimeout(() => {
        const routes = tf.$router.options.routes
        var currentUrl = window.location.pathname
        switch (currentUrl) {
          case '/':
            tf.routeIndex = 0
            break
          case '/1':
            tf.routeIndex = 1
            break
          case '/2':
            tf.routeIndex = 2
            break
        }
        console.log(currentUrl)
        tf.$router.push(currentUrl)
        console.log(tf.traffTimeout[tf.routeIndex])
        // Цвет светофора в зависимотси от this.routes[this.routeIndex].path. Таймер выставляю тоже отнасительно this.routeIndex
        routes[tf.routeIndex].path === '' ? tf.colorRed = 'red' : tf.colorRed = 'grey'
        routes[tf.routeIndex].path === '/1' ? tf.colorYellow = 'yellow' : tf.colorYellow = 'grey'
        routes[tf.routeIndex].path === '/2' ? tf.colorGreen = 'green' : tf.colorGreen = 'grey'
        tf.routeIndex = (tf.routeIndex + 1) % routes.length
        tf.$router.push(routes[tf.routeIndex])
        startLight()
      }, isStart ? 100 : tf.traffTimeout[tf.routeIndex])
      isStart = false
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
