<template>
  <h2>App 父级组件：Suspense组件使用</h2>
  <Suspense>
    <template #default>
      <!-- 异步组件 -->
      <!-- <AsyncComponent/> -->
      <AsyncAddress/>
    </template>

    <template v-slot:fallback>
      <!-- loading的内容 -->
      <p>loading...</p>
    </template>

  </Suspense>

  <hr>

</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
// 引入组件：静态引入和动态引入

// Vue2 中的动态引入组件的写法：(!!!在Vue3中这种写法不行)
// const AsyncComponent = ()=>import('./AsyncComponent.vue')
// Vue3中的动态引入组件的写法
// const AsyncComponent = defineAsyncComponent(()=>import('./AsyncComponent.vue'))

// 静态引入组件
// import AsyncComponent from './AsyncComponent.vue'

import AsyncAddress from './AsyncAddress.vue'

export default defineComponent({
  name: 'App',
  components: {
    // AsyncComponent
    AsyncAddress
  }
})
</script>