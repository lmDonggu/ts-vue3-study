<template>
  <h2>reactive 的基本使用</h2>
  <ul>
    <li>作用: 定义多个数据的响应式</li>
    <li>const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象</li>
    <li>响应式转换是“深层的”：会影响对象内部所有嵌套的属性</li>
    <li>内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的</li>
  </ul>
  <h3>名字：{{user.name}}</h3>
  <h3>年龄：{{user.age}}</h3>
  <h3>性别：{{user.gender}}</h3>
  <h3>媳妇：{{user.wife}}</h3>
  <hr>
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">

// defineComponent函数，目的是定义一个组件，内部传入一个配置对象
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据
  /* 
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
*/


  setup() {
    // const obj:any = { // 为了在使用obj.gender='男'的时候不出现这种错误提示信息才这么书写
    const obj:any = {
      name: '冬菇',
      age: 29,
      wife: {
        name: '宝贝',
        age: 18,
        cars: ['奔驰','宝马','奥迪']
      }
    }
    // 把数据变成响应式的数据
    // 返回的是被一个Proxy的代理对象，被代理的目标对象就是obj对象
    // user现在是代理对象（对象类型是Proxy），obj是目标对象
    const user = reactive<any>(obj)
    console.log(user);
    // 方法
    // function updateUser() {}
    const updateUser = () => {
      // 直接使用target目标对象的方式来更新目标对象中的成员的值是不可能的
      // 只能使用代理对象的方式来更新数据（响应式数据）
      // obj.name += '==='
      // 使用代理对象可以
      // user.name += '=='
      // user.age += 2
      // user.wife.name +='猪头' 
      // user.wife.cars[0] = '玛莎拉蒂'

      // user----> 代理对象，obj---->目标对象
      // user对象或者obj对象添加一个新属性，哪种方式会影响界面的更新
      // obj.gender = '男' // 这种方式界面没有更新渲染
      user.gender = '男' // 这种方式界面可以更新渲染，而且这个数据最终也添加到了obj对象上了
      // user对象或者obj对象移除一个已经存在的属性，哪种方式会影响界面的更新
      // delete obj.age // 界面没有更新渲染，obj中没有age属性
      // delete user.age

      // 总结：如果操作代理对象，目标对象中的数据也会变化，同时如果想要在操作数据的时候，界面也要跟着重新更新渲染，那么也是操作代理对象


      // 通过当前代理对象，找到该对象中的某个属性，更改该属性中的某个数组中的数据
      // user.wife.cars[1] = '旋风冲锋'

      // 通过当前的代理对象把目标中的某个数组属性添加一个新的属性
      user.wife.cars[3] = '马卡龙'
    }
    return {
      user,
      updateUser
    }
  }
});
</script>
