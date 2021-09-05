<template>
  <h2>Child子级组件</h2>
  <h3>msg：{{ msg }}</h3>
  <button @click="emitxxx">分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Child",
  props: ["msg"],
  //   setup细节问题：
  // setup是在beforeCreate声明周期回调之前就执行，而且就执行一次
  // 由此可以推断出：setup在执行的时候，当前的组件还没有创建出来，也就意味着：组件实例对象this根本不能用
  // this是undefined, 说明：就不能通过this再去调用data/computed/methods/props中的相关内容了
  // 其实所有的composition API相关回调函数中也都不可以

  // setup 中的返回值是一个对象，内部的属性和方法是给html 模版使用
  // setup 中的内部对象的属性和data函数中的return 对象属性都可以在html模版中使用
  // setup 返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
  // setup 返回对象中的方法会与methods对象中的方法合并成为组件对象的属性
  // 在Vue3中尽量不要混合使用data和setup/methods和setup
  // 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
  // setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据



  // 数据初始化的生命周期回调
  // beforeCreate() {
  //   console.log("beforeCreate执行")
  // },

  // setup(props, context) {
  setup(props, {attrs, slots, emit}) {
    // props 是一个对象，里面有父级组件向子级组件传递的数据，并且是在子级组件中使用props接收到的所有的属性
    console.log(props)

    // context 参数是一个对象，里面有attrs对象（获取当前组件标签上的所有的属性，但是该属性在props中没有声明接收的所有的对象），emit（分发事件），slots（插槽）
    // attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    // console.log(context.attrs)
    // console.log(context.emit)
    // console.log(context.attrs.msg2)
    console.log("setup执行", this)

    const showMsg1 = () => {
      console.log('setup中的showMsg 方法');
    }
    // 按钮的点击事件的回调函数
    function emitxxx() {
      // context.emit('foo','++')
      emit('foo','++')
    }

    return {
      showMsg1,
      emitxxx
      // setup 中一般都是返回一个对象，对象中的属性和方法都可以在html模版中直接使用
    }
  },
  // data () {
  //   return {
  //     count: 10
  //   }
  // },
  // // 界面渲染后的生命周期回调
  // mounted() {
  //   console.log('======')
  //   console.log(this)
  // },
  // // 方法
  // methods: {
  //   showMsg2() {
  //     console.log('methods中的showMsg方法');
  //   }
  // }
})
</script>
