<template>
  <li v-bind:class="{'traffic-light__item': colorGreen === 'grey', 'traffic-light__item traffic-light__item--green': colorGreen === 'green'}" ></li>
</template>

<script>
export default {
  name: 'GreenLight',
  props: ['colorGreen']
}
</script>
