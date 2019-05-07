<template>
  <div >
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
  </div>
</template>

<script>

export default {
  name: 'checkboxs',
  data () {
    return {
      checkedNames: []
    }
  }
}
</script>

<style scoped>

</style>
