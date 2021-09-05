<template>
  <h2>readonly和shallowReadonly</h2>
  <p>应用场景:
在某些特定情况下, 我们可能不希望对数据进行更新的操作, 那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除</p>
  <hr>
  <p>state: {{state}}</p>
  <p>state2: {{state2}}</p>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent,reactive, readonly, shallowReadonly } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: 'zuozhu',
      age: 16,
      car: {
        name: 'penci',
        color: 'pink'
      }
    })
    // readonly() 只读的数据===深度的只读
    // const state2 =  readonly(state)

    // shallowReadonly() 浅度的只读，深层可修改
    const state2 = shallowReadonly(state)
    const update = () => {
      // state2.name += '==='
      state2.car.name += '==='
    }
    return {
      state,
      state2,
      update
    }
  }
})
</script>