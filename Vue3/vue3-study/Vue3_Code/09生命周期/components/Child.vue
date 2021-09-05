<template>
  <h2>Child 子级组件</h2>
  <h4>msg：{{msg}}</h4>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent,ref,onBeforeMount, onMounted, onBeforeUpdate, onUpdated,onBeforeUnmount, onUnmounted } from 'vue'
export default defineComponent({
    name: 'App',
    // vue 2.x 中的生命周期钩子
    beforeCreate(){
        console.log('vue2.x中的beforeCreate。。。');
    },
    created(){
        console.log('vue2.x中的created。。。');
    },
    beforeMount(){
        console.log('vue2.x中的beforeMount。。。');
    },
    mounted(){
        console.log('vue2.x中的mounted。。。');
    },
    beforeUpdate(){
        console.log('vue2.x中的beforeUpdate。。。');
    },
    updated(){
        console.log('vue2.x中的updated。。。');
    },
    // vue2.x 中的beforeDestroy和destroyed 这两个生命周期回调已经在vue3中改名，不能在使用
    beforeUnmount(){
        console.log('vue2.x中的beforeUnmount。。。');
    },
    unmounted(){
        console.log('vue2.x中的unmounted。。。');
    },
    setup(){
        console.log('3.0中的setup');
        const msg = ref('冬菇')
        const update = () => {
            msg.value += '⭐'
        }
        onBeforeMount(()=> {
            console.log('vue3中的onBeforeMount...');
        })
        onMounted(()=> {
            console.log('vue3中的onMounted...');
        })
        onBeforeUpdate(()=> {
            console.log('vue3中的onBeforeUpdate...');
        })
        onUpdated(()=> {
            console.log('vue3中的onUpdated...');
        })
        onBeforeUnmount(()=> {
            console.log('vue3中的onBeforeUnmount...');
        })
        onUnmounted(()=> {
            console.log('vue3中的onUnmounted...');
        })
        return{
            msg,
            update
        }
    }
})
</script>