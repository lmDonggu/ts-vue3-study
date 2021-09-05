// 如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性
(() => {
    // 用来约束将来的某个类型中必须要有length 这个属性
    interface ILength {
        // 接口中有一个属性length
        length: number
    }
    function getLength<T extends ILength>(x: T) : number {
        return x.length
    }
    console.log(getLength<string> ('donggu is beautiful'));
    // console.log(getLength<number> (123));
})()
