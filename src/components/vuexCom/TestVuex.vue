<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{count}}</h3>
    <button @click="add(10)">+</button>
    <button @click="reduce">-</button>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import store from '@/vuex/index'
export default{
  name: 'TestVuex',
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  },
  store
}
</script>

<style scoped>

</style>
