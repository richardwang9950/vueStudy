<template>
  <div>
    父组件:
    <input type="text" v-model="names">
    <br>
    <br>
    <!-- 引入子组件 -->
    <son :inputName="names"></son>
  </div>
</template>
<script>
import son from './son'
export default {
  name: 'father',
  components: {
    son
  },
  data () {
    return {
      names: {
        game: ['one', 'two', 'three'],
        user: {
          name: 'ss',
          age: 19
        },
        type: 'sd'
      }
    }
  }
}
</script>
