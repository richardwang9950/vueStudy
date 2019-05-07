<template>
<div>
  <h2>v-on</h2>
  <p v-text="msg"></p>
  <button @click="add">加</button>
  <button @click="sub">减</button>
</div>
</template>

<script>
export default {
  name: 'V_On',
  data () {
    return {
      msg: 0
    }
  },
  methods: {
    add: function () {
      this.msg++
    },
    sub: function () {
      this.msg--
    }
  }
}
</script>

<style scoped>

</style>
