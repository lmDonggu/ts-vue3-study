// 函数重载: 函数名相同, 而形参不同的多个函数
(() => {
    // 需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，
    // 也可以接收2个number类型的参数进行相加 

    // 函数重载声明
    function add(x: string, y: string): string
    function add(x: number, y: number): number
    // 函数声明
    function add(x: string | number, y: string | number): string | number {
        if (typeof x === 'string' && typeof y === 'string') {
            // 字符串拼接
            return x + y
        } else if ( typeof x === 'number' && typeof y === 'number' ) {
            // 数字相加
            return x + y
        }
    }

    console.log(add('卧龙', '凤雏'));
    console.log(add(10, 20));

    // 此时如果传入非法数据，ts应该给我提示出错误的信息内容，报红色错误 => 利用函数重载
    // console.log(add(10, '真香'));
    // console.log(add('真好', 20));

})()