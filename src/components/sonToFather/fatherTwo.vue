<template>
  <div>
    父组件:
    <span>{{name}}</span>
    <br>
    <br>
    <!-- 引入子组件 定义一个on的方法监听子组件的状态-->
    <sonTwo v-on:childByValue="childByValue"></sonTwo>
  </div>
</template>
<script>
import sonTwo from './sonTwo'
export default {
  name: 'fatherTwo',
  components: {
    sonTwo
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    childByValue: function (childValue) {
      // childValue就是子组件传过来的值
      this.name = childValue
    }
  }
}
</script>
