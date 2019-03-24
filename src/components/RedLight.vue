<template>
  <li v-bind:class="{'traffic-light__item traffic-light__item-red': colorRedOpacity === '0.5',
   'traffic-light__item traffic-light__item-red traffic-light__item--active': colorRedOpacity === '1'}" >
   <span v-if="url==='/'" v-bind:style="{ display: 'flex', fontSize: '40px', margin: 'auto'}">{{ redTimer }}</span>
   </li>
</template>

<script>
export default {
  name: 'RedLight',
  props: ['colorRedOpacity', 'redTimer', 'url']
}
</script>
