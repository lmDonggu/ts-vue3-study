<template>
  <h2>toRefs的使用</h2>
  <!-- <p>name: {{state.name}}</p>
  <p>age: {{state.age}}</p> -->

  <p>name: {{name}}</p>
  <p>age: {{age}}</p>
  <hr>
  <p>name2: {{name2}}</p>
  <p>age2: {{age2}}</p>
</template>
<script lang="ts">
import { defineComponent,reactive,toRefs } from 'vue'

// 应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用

// 问题: reactive 对象取出的所有属性值都是非响应式的

// 解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性



function useFeatureX() {
  const state = reactive({
      name2: 'luban',
      age2: 11
  })
  return {
    ...toRefs(state)
  }
}

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: '自来也',
      age: 47
    })
    // toRefs把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
    const {name, age} = toRefs(state)
    // const state2 = toRefs(state)
    // console.log(state2);
    // 定时器，更新数据，（如果数据变化，界面也随之变化，肯定是响应式数据）
    setInterval(()=> {
      // state.name += '='
      // state2.name.value += '='
      name.value += '='
      age.value ++
      console.log('==')
    },1000)

    const {name2, age2} = useFeatureX()


    return {
      // state
      // 下面的方式不行
      // ...state // 不是响应式的数据===> {name:'自来也'，age:47}
      // ...state2 toRefs返回来2的对象
      name,
      age,
      name2,
      age2
    }
  }
})
</script>