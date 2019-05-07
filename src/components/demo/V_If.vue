<template>
  <div class="hello">
    <h1>v-if & v-show & v-else</h1>
    <div v-if="isLogin">hello v-if </div>
    <div v-else>hello v-else </div>
    <div v-show="isShow">hello v-else </div>
  </div>
</template>

<script>
export default {
  name: 'V_If',
  data () {
    return {
      isLogin: false,
      isShow: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
