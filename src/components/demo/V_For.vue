<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.name"><a v-bind:href="item.url">{{item.name}}</a> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'V_For',
  data () {
    return {
      items: [{ url: 'http://www.baidu.com', name: '百度' },
        { url: 'http://www.sina.com', name: '新浪' },
        { url: 'http://www.richardwang.cn', name: '博客' }]
    }
  }
}
</script>

<style scoped>

</style>
