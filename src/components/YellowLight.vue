<template>
  <li v-bind:class="{'traffic-light__item': colorYellow === 'grey', 'traffic-light__item traffic-light__item--yellow': colorYellow === 'yellow'}" ></li>
</template>

<script>
export default {
  name: 'YellowLight',
  props: ['colorYellow']
}
</script>
