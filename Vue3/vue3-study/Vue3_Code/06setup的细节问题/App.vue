<template>
  <h2>App父亲组件</h2>
  <h3>msg: {{msg1}}</h3>
  <button @click="msg1 += '==='">update</button>
  <hr />

  <Child :msg="msg1" msg2="真香=========" @foo="foo" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// 引入子级组件Child
import Child from './components/Child.vue'

export default defineComponent({
  name: "App",
  // 注册组件
  components: {
    Child
  },

  setup(){
    const msg1 = ref('hello world')
    function foo(res:any):any {
      msg1.value += res
    }
    return {
      msg1,
      foo
    }
  }
})
</script>
