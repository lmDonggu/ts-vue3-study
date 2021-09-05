// 函数：封装了一些重复使用的代码，在需要时调用
(() => {

    // js中书写方式 -----> 在ts 中同样的可以这么写
    // 函数声明，命名函数
    // function add (x, y) {
    //     return x + y
    // }
    // // 函数表达式
    // const add2 = function(x, y) {
    //     return x + y
    // }

    // ts 中书写方式
    // 函数声明，命名函数
    // 函数参数x,y 的类型都是string，小括号后的string代表函数的返回值也是string
    function add (x: string, y: string): string {
        return x + y
    }
    const res1 = add('111', '222')
    console.log(res1);

    // 函数表达式
    // 函数参数x,y 的类型都是number，小括号后的number代表函数的返回值也是number
    const add2 = function(x: number, y: number): number {
        return x + y
    }
    console.log(add2(10, 20));


    // 函数完整写法
    // add3 -----> 变量名
    // (x:number, y: number) => number 当前函数的类型
    // function(x:number, y: number): number {return x + y} 就相当于符合上面这个函数类型的值
    const add3: (x:number, y: number) => number = function(x:number, y: number): number {
        return x + y
    }
    console.log(add3(10, 100));
})()