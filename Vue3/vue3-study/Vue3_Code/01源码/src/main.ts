// 程序的主入口文件 ts文件 main.ts
// 引入createApp函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
// 引入APP组件（所有组件的父组件）
import App from './App.vue'
// 创建APP应用，返回对应的实例对象，调用mount方法进行挂载，挂在到#app
createApp(App).mount('#app')
