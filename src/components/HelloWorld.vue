<template>
  <div>
    点击module下的按钮数字+1---{{countB}}
    <br>
    <div @click="handleClick">
      <input type="button" value="按钮+1" />
    </div>

    <div>isArray 传入 666 的值 {{isArray(666)}}</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import isArray from './is_array'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState('lmCount', {
      'countB': state => state.countB
    })
  },
  methods: {
    isArray,
    ...mapActions('lmCount', ['addCount']),
    handleClick () {
      this.addCount()
      axios({
        method: 'post',
        url: '/user/12345',
        data: {
          name: 'lmm',
          age: '23'
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
