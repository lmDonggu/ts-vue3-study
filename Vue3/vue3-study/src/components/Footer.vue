<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span> <span>已完成{{count}}</span> / 全部{{todos.length}} </span>
    <button class="btn btn-danger" @click="clearAllCompletdTodos">清除已完成任务</button>
  </div>
</template>
<script lang="ts">
import { defineComponent,computed } from "vue";
import {Todo} from '../types/todo'
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as ()=> Todo[],
      required: true
    },
    checkAll: {
      type: Function,
      required: true
    },
    clearAllCompletdTodos: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    // 已完成的计算属性操作
    const count = computed(()=>{
      // reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
      // arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
      // Accumulator (acc) (累计器) /Current Value (cur) (当前值) /Current Index (idx) (当前索引) /Source Array (src) (源数组)
      return props.todos.reduce((pre, todo)=>pre+(todo.isCompleted?1:0),0)
    })

    // 全选或全不选的计算属性操作
    const isCheckAll = computed({
      get(){
        return count.value>0 && props.todos.length === count.value
      },
      set(val){
        props.checkAll(val)
      }
    })

    return {
      count,
      isCheckAll
    }
  }
})
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>