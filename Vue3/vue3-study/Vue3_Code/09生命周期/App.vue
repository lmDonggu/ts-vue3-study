<template>
  <h2>App 父级组件</h2>
  <button @click="isShow= !isShow">显示/隐藏</button>
  <hr />
  <child v-if="isShow"/>
</template>

<script lang="ts">
import Child from './components/Child.vue'
import { defineComponent,ref } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  setup() {
    const isShow = ref(true)
    return {
      isShow
    }
  }
})
</script>
