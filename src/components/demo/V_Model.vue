<template>
  <div >
    <p>原始文本信息：{{message}}</p>
    <h3>文本框</h3>
    <p>v-model:<input type="text" v-model="message"></p>
  </div>
</template>

<script>
export default {
  name: 'V_Model',
  data () {
    return {
      message: ''
    }
  }
}
</script>

<style scoped>

</style>
