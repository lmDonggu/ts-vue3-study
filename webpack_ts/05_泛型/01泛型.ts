// 泛型：在定义函数、接口、类的时候不能预先确定要使用的数据类型，而是在使用的时候才能确定类型
(() => {
    // 需求： 定义一个函数，传入两个参数，第一参是数据，第二参是数量
    // 函数的作用：根据数量产生对应个数的数据，存放在一个数组中

    // 传入数字类型
    function getArr1(value: number, count: number): number[] {
        // 根据数据和数量产生一个数组
        const arr: number[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr1 = getArr1(100.123, 3)
    console.log(arr1);

    // 传入字符串类型
    function getArr2(value: string, count: number): string[] {
        // 根据数据和数量产生一个数组
        const arr: string[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr2 = getArr2('abc', 3)
    console.log(arr2);


    // 传入任意类型的数据,返回来的是存储这个任意类型数据的数组
    function getArr3(value: any, count: number): any[] {
        // 根据数据和数量产生一个数组
        const arr: any[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr31 = getArr3(300.123, 3)
    const arr32 = getArr3('xyz', 3)
    console.log(arr31);
    console.log(arr32);
    // 没有任何的智能提示的信息，于是有了第四种写法
    console.log(arr31[0].toFixed(2));
    console.log(arr32[0].split(''));

    
    // 第四种
    function getArr4<T>(value: T, count: number): T[] {
        // 根据数据和数量产生一个数组
        // const arr: T[] = []
        const arr: Array<T> = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr41 = getArr4(300.12345, 3)
    const arr42 = getArr4('donggu', 3)
    console.log(arr41);
    console.log(arr42);
    console.log(arr41[0].toFixed(3));
    console.log(arr42[0].split(''));
})()