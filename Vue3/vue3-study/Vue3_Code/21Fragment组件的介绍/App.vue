<template>
  <!-- 根标签 -->
  <div>
    <h2>测试1</h2>
    <h2>测试2</h2>
    <ul>
      <li>在Vue2中: 组件必须有一个根标签</li>
      <li>在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中</li>
      <li>好处: 减少标签层级, 减小内存占用</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>