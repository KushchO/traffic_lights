<template>
  <li v-bind:class="{'traffic-light__item': colorRed === 'grey', 'traffic-light__item traffic-light__item--red': colorRed === 'red'}" ></li>
</template>

<script>
export default {
  name: 'RedLight',
  props: ['colorRed']
}
</script>
