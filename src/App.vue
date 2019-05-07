<template>
  <div id="app">
    <router-link to="/radios">radios</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/checkboxs">checkboxs</router-link>
    <router-link to="/selectd">selectd</router-link>
    <router-link to="/father">父组件向子组件传值</router-link>
    <router-link to="/fatherTwo">子组件向父组件传值</router-link>
    <router-link to="/TestVuex">Vuex</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
