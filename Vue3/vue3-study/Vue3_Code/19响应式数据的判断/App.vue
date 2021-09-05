<template>
  <h3>响应式数据的判断</h3>
  <ul>
    <li>isRef: 检查一个值是否为一个 ref 对象</li>
    <li>isReactive: 检查一个对象是否是由 reactive 创建的响应式代理</li>
    <li>isReadonly: 检查一个对象是否是由 readonly 创建的只读代理</li>
    <li>isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    console.log(isRef(ref({})))
    console.log(isReactive(reactive({})))
    console.log(isReadonly(readonly({})))
    console.log(isProxy(readonly({})))
    console.log(isProxy(reactive({})))
    return {}
  }
})
</script>
f