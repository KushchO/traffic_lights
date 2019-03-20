<template>
  <div class="traffic-light">
  <ul class="traffic-light__list">
    <RedLight/>
    <li class="traffic-light__item">Привет</li>
    <li class="traffic-light__item"></li>
  </ul>
</div>
</template>

<script>
import RedLight from '@/components/RedLight.vue'

export default {
  name: 'TrafficLights',
  props: ['color'],
  components: {
    RedLight
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
