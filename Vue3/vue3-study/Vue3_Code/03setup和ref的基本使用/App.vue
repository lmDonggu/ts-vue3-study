<template>
  <h2>setup和ref 的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">

// defineComponent函数，目的是定义一个组件，内部传入一个配置对象
import { defineComponent, ref } from 'vue';

// 暴露出去一个定义好的组件
export default defineComponent({
  name: 'App',

  // 需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化

  // vue2的实现方式
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   updateCount() {
  //     this.count++
  //   }
  // }

  // vue3的实现方式
  // setup 是组合API的入口函数
  setup() {
    console.log('setup只执行一次');
    // 变量
    // let count = 0 // 此时的数据并不是响应式的数据（响应式数据：数据变化，页面跟着渲染变化）
    // ref 是一个函数，作用：定义一个数据的响应式（可以理解为定义数据的一种形态），返回的是一个Ref对象。
    // 对象中有一个value属性，如果需要对数据进行操作，需要使用该Ref对象调用value属性的方式进行数据操作。
    // html 模版中是不需要使用.value属性的写法
    // count的类型是Ref类型
    const count = ref(1)
    console.log(count);
    // 方法
    function updateCount() {
      console.log('function');
      // 报错原因：count 是一个Ref对象，对象不能进行++ 操作
      // count++
      count.value++
    }
    // 返回的是一个对象
    return {
      // 属性
      count,
      // 方法
      updateCount
    }
  }



});
</script>
