<template>
  <div>
    子组件:
    <span>{{inputName}}</span>
  </div>
</template>
<script>
export default {
  name: 'son',
  // 接受父组件的值
  props: ['inputName']
}
</script>
