<template>
  <li v-bind:class="{'traffic-light__item': color === 'grey', 'traffic-light__item--red': color === 'red'}" ></li>
</template>

<script>
export default {
  name: 'RedLight',
  props: ['color'],
  // created () {
  //   console.log(color)
  // }
}
</script>
