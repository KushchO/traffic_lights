<template>
  <li v-bind:class="{'traffic-light__item traffic-light__item-yellow': colorYellowOpacity === '0.5',
   'traffic-light__item traffic-light__item-yellow traffic-light__item--active': colorYellowOpacity === '1'}" >
   <span v-show="url==='/1'" v-bind:style="{ display: 'flex', fontSize: '40px', margin: 'auto'}">{{ yellowTimer }}</span></li>
</template>

<script>
export default {
  name: 'YellowLight',
  props: ['colorYellowOpacity', 'yellowTimer', 'url']
}
</script>
