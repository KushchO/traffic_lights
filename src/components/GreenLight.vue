<template>
  <li v-bind:class="{'traffic-light__item traffic-light__item-green': colorGreenOpacity === '0.5',
   'traffic-light__item traffic-light__item-green traffic-light__item--active': colorGreenOpacity === '1'}" >
   <span v-show="url==='/2'" v-bind:style="{ display: 'flex', fontSize: '40px', margin: 'auto'}">{{ greenTimer }}</span>
   </li>
</template>

<script>
export default {
  name: 'GreenLight',
  props: ['colorGreenOpacity', 'greenTimer', 'url']
}
</script>
