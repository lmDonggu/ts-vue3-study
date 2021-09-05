<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstName"><br/>
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastName"><br/>
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName1"><br/>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName2"><br/>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName3"><br/>
  </fieldset>
</template>
<script lang="ts">
import { defineComponent,reactive,computed, watch, ref,watchEffect } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    // 定义一个响应式对象
    const user = reactive({
      firstName: '西方',
      lastName: '失败'
    })
    // 通过计算属性的方式，实现第一个姓名的显示
    // Vue3中的计算属性
    // 计算属性中的函数中如果只传入一个回调函数，表示get

    // 第一个姓名
    // 返回的是一个Ref类型的对象
    // 传入回调是get操作
    const fullName1 = computed(() => {
      return user.firstName + '-' + user.lastName
    })

    // 第二个姓名
    // 如果需要get set，那里面传入的是一个对象
    const fullName2 = computed({
      get() {
        return user.firstName + '-' + user.lastName
      },
      set(val: string) {
        // console.log('======', val);
        const names = val.split('-')
        user.firstName = names[0]
        user.lastName = names[1]

      }
    })

    // 第三个姓名
    const fullName3 = ref('')
    // 监视----监视指定的数据
    watch(user, ({firstName, lastName})=> {
      fullName3.value = firstName + '-' + lastName
    },{immediate: true,deep:true})
    // immediate 默认会执行一次watch,deep 深度监视

    // 监视 （effect;结果）
    // 不需要配置immediate，本身默认就会进行监视（默认执行一次）
    // watchEffect(()=>{
    //   fullName3.value = user.firstName + '-' + user.lastName
    // })

    // 监视fullName3的数据，改变firstName 和lastName
    watchEffect(() => {
      const names = fullName3.value.split('-')
      user.firstName = names[0]
      user.lastName = names[1]
    })

    // watch---可以监视多个数据的
    // watch([user.firstName, user.lastName,fullName3], ()=> {
    //   // 这里的代码就没有执行，fullName3是响应式的数据，但是user.firstName,user.lastName不是响应式数据
    //   console.log('====');
    // })

    // 当我们使用watch 监视非响应式的数据的时候，数据需改成回调形式
    watch([()=>user.firstName, ()=>user.lastName,fullName3], ()=> {
      console.log('====');
    })


    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    }
  }
})
</script>