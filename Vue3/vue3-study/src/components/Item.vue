<template>
  <!-- 当定点设备（通常指鼠标）移动到元素上时就会触发 mouseenter 事件 -->
  <!-- 指点设备（通常是鼠标）的指针移出某个元素时，会触发mouseleave事件。 -->
  <li @mouseenter="mouseHandler(true)"
  @mouseleave="mouseHandler(false)"
  :style="{backgroundColor:bgColor,color:myColor}"
  >
    <label>
      <input type="checkbox" v-model="isComplete"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delTodo">删除</button>
  </li>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
// 引入接口
import {Todo} from '../types/todo'
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as ()=> Todo, // 函数返回的是Todo类型
      required: true
    },
    deleteToto: {
      type: Function,
      required: true
    },
    updateTodo: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
  },
  setup(props) {
    // 背景色
    const bgColor = ref('white')
    // 字体色
    const myColor = ref('black')
    // 设置按钮显示参数
    const isShow = ref(false)
    // 鼠标进入和离开时间的回调函数
    const mouseHandler = (flag: boolean) => {
      if(flag) {
        // 鼠标进入
        bgColor.value = '#333'
        myColor.value = 'white'
        isShow.value = true
      } else {
        // 鼠标离开
        bgColor.value = 'white'
        myColor.value = 'black'
        isShow.value = false
      }
    }
    // 删除数据的方法
    const delTodo = ()=> {
      if(window.confirm('确定要删除数据吗？')) {
        props.deleteToto(props.index)
      }
    }
    // 计算属性的方式----来让当前的复选框选中/不选中
    // 单向数据流，调用父级组件的方法去改变父级组件的数据
    const isComplete = computed({
      get(){
        return props.todo.isCompleted
      },
      set(val){
        props.updateTodo(props.todo, val)
      }
    })
    return {
      mouseHandler,
      bgColor,
      myColor,
      isShow,
      delTodo,
      isComplete
    }
  }
})
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>