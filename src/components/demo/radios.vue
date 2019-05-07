<template>
  <div id="example-4">
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked" >
    <label for="two">Two</label>
    <br>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  name: 'radios',
  data () {
    return {
      picked: 'One'
    }
  },
  components: { AButton: Button }
}
</script>

<style scoped>

</style>
