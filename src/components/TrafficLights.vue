<template>
  <div class="traffic-light">
  <ul class="traffic-light__list">
    <RedLight :colorRedOpacity="colorRedOpacity" :redTimer="redTimer" :url="url"/>
    <YellowLight :colorYellowOpacity="colorYellowOpacity" :yellowTimer="yellowTimer" :url="url"/>
    <GreenLight :colorGreenOpacity="colorGreenOpacity" :greenTimer="greenTimer" :url="url"/>
  </ul>
</div>
</template>

<script>
import RedLight from '@/components/RedLight.vue'
import YellowLight from '@/components/YellowLight.vue'
import GreenLight from '@/components/GreenLight.vue'
import router from '@/router'
import { setInterval, clearInterval, setTimeout, clearTimeout } from 'timers'

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
      routeIndex: '0',
      colorRedOpacity: '1',
      colorYellowOpacity: '0.5',
      colorGreenOpacity: '0.5',
      redTimer: 10,
      yellowTimer: 3,
      greenTimer: 15,
      url: '',
      traffTimeout: [
        10000,
        3000,
        15000
      ]
    }
  },
  created () {
    const tf = this
    let timerID

    const changeOpacity = function (url) {
      // Цвет светофора в зависимотси от this.routes[this.routeIndex].path. Таймер выставляю тоже отнасительно this.routeIndex
      url === '/' ? tf.colorRedOpacity = '1' : tf.colorRedOpacity = '0.5'
      url === '/1' ? tf.colorYellowOpacity = '1' : tf.colorYellowOpacity = '0.5'
      url === '/2' ? tf.colorGreenOpacity = '1' : tf.colorGreenOpacity = '0.5'
    }

    const toggleOpacity = function (url, timeout) {
      setTimeout(() => {
        timerID = setInterval(() => {
          switch (url) {
            case '/':
              tf.colorRedOpacity === '1' ? tf.colorRedOpacity = '0.5' : tf.colorRedOpacity = '1'
              break
            case '/1':
              tf.colorYellowOpacity === '1' ? tf.colorYellowOpacity = '0.5' : tf.colorYellowOpacity = '1'
              break
            case '/2':
              tf.colorGreenOpacity === '1' ? tf.colorGreenOpacity = '0.5' : tf.colorGreenOpacity = '1'
              break
          }
        }, 500)
      }, tf.traffTimeout[tf.routeIndex] - timeout)
    }

    const timer = function (url, timeout) {
      console.log(url)
      tf.url = url
      let timerID = setInterval(() => {
        switch (url) {
          case '/':
            tf.redTimer--
            break
          case '/1':
            tf.yellowTimer--
            break
          case '/2':
            tf.greenTimer--
            break
        }
      }, 1000)
      setTimeout(() => {
        clearTimeout(timerID)
      }, timeout)
    }

    const startLight = function () {
      const routes = tf.$router.options.routes
      var currentUrl = window.location.pathname
      switch (currentUrl) {
        case '/':
          tf.redTimer = 10
          tf.routeIndex = 0
          timer(currentUrl, tf.traffTimeout[tf.routeIndex])
          changeOpacity(currentUrl)
          toggleOpacity(currentUrl, 3000)
          break
        case '/1':
          tf.yellowTimer = 3
          tf.routeIndex = 1
          timer(currentUrl, tf.traffTimeout[tf.routeIndex])
          changeOpacity(currentUrl)
          toggleOpacity(currentUrl, 2000)
          break
        case '/2':
          tf.greenTimer = 15
          tf.routeIndex = 2
          timer(currentUrl, tf.traffTimeout[tf.routeIndex])
          changeOpacity(currentUrl)
          toggleOpacity(currentUrl, 3000)
          break
      }
      tf.$router.push(currentUrl)
      setTimeout(() => {
        clearInterval(timerID)
        tf.routeIndex = (tf.routeIndex + 1) % routes.length
        tf.$router.push(routes[tf.routeIndex])
        startLight()
      }, tf.traffTimeout[tf.routeIndex])
    }

    startLight()
  }
}
</script>

<style scoped lang="scss">
/*traffic-light */

.traffic-light {
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
  border-radius: 50%;
  opacity: 0.3;
  display: flex;

  &--active {
    opacity: 1;
  }

  &-red {
    background-color: red;

  }

  &-yellow {
    background-color: yellow;
  }

  &-green {
    background-color: rgb(15, 228, 15);
  }

}

.traffic-light__item:not(:last-child) {
  margin-bottom: 20px;
}

</style>
