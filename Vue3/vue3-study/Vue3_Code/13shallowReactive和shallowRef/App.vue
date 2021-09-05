<template>
  <h2>shallowReactive和shallowRef</h2>
  <ul>什么时候用浅响应式呢?
    <li>一般情况下使用ref和reactive即可</li>
    <li>如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive</li>
    <li>如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef</li>
  </ul>
  <hr>
  <p>{{m1}}</p>
  <p>{{m2}}</p>
  <p>{{m3}}</p>
  <p>{{m4}}</p>
  <button @click="update">更新数据</button>


</template>
<script lang="ts">
import { defineComponent,reactive, ref, shallowReactive, shallowRef } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    // 深度劫持（深度监视）---深度响应式
    const m1 = reactive({
      name: '雏田',
      age: 18,
      car: {
        name: 'bwm',
        color: 'pink'
      }
    })
    // 浅劫持（浅监视）---浅响应式
    const m2 = shallowReactive({
      name: '雏田',
      age: 18,
      car: {
        name: 'bwm',
        color: 'pink'
      }
    })
    // 深度劫持（深度监视）---深度响应式---做了reactive的处理
    const m3 = ref({
      name: '雏田',
      age: 18,
      car: {
        name: 'bwm',
        color: 'pink'
      }
    })
    // 浅劫持（浅监视）---浅响应式
    const m4 = shallowRef({
      name: '雏田',
      age: 18,
      car: {
        name: 'bwm',
        color: 'pink'
      }
    })
    const update = () => {
      // m1.name += '=='
      // m1.car.name += '=='
      // m2.name += '=='
      // m2.car.name += '++'
      // m3.value.name += '=='
      // m3.value.car.name += '=='
      // m4.value.name += '=='
      // m4.value.car.name += '++'
      console.log(m3, m4);
    }
    return {
      m1, m2, m3, m4, update
    }
  }
})
</script>