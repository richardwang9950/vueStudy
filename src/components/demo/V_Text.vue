<template>
<div>
  <p v-text="msg"></p>
  <p v-html="demo"></p>
</div>
</template>

<script>
export default {
  name: 'V_Text',
  data () {
    return {
      msg: 'hello text',
      demo: '<b>hello</b>'
    }
  }
}
</script>

<style scoped>

</style>
