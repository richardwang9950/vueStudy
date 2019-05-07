<template>
  <div>
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.text">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  name: 'selectd',
  data () {
    return {
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }

}
</script>

<style scoped>

</style>
