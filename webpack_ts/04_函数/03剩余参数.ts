// rest参数 剩余参数 在函数声明的时候放在所有的参数的最后
(() => {
    function showMsg(str1: string, str2: string, ...args: string[]) {
        console.log(str1);
        console.log(str2);
        console.log(args);
    }
    showMsg('a', 'b', 'c', 'd', 'e')
})()