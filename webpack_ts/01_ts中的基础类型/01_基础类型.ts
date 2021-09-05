// 基础类型
(() => {
    // 布尔类型 最基本的数据类型就是简单的 true/false 值，
    // 在JavaScript 和 TypeScript 里叫做 boolean（其它语言中也一样）。
    let isDone: boolean = true
    console.log(isDone);

    // 数字类型
    // 和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 
    // 这些浮点数的类型是 number。 
    // 除了支持十进制和十六进制字面量，
    // TypeScript 还支持 ECMAScript 2015中引入的二进制和八进制字面量。
    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    console.log(a1, a2, a3, a4);

    // 字符串
    // JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。
    // 像其它语言里一样，我们使用 string 表示文本数据类型。
    // 和 JavaScript 一样，可以使用双引号（"）或单引号（'）表示字符串。
    let str1: string = '上'
    let str2: string = '床'
    let str3: string = '睡'
    let str4: string = '觉'
    console.log(`${str1}-${str2}-${str3}-${str4}`);

    // 字符串和数字拼接
    let name:string = 'cb'
    name = 'wy'
    // name = 12 // error
    let age:number = 29
    const info = `My name is ${name}, I am ${age} years old!`
    console.log(info);

    // ts中 变量开始是什么类型，后期赋值只能使用这个类型，是不允许使用其他类型数据赋值给变量
    console.log('======================================');

    // TypeScript 里，undefined 和 null 两者各自有自己的类型
    // 分别叫做 undefined 和 null。
    // 它们的本身的类型用处不是很大：
    // 默认情况下 null 和 undefined 是所有类型的子类型。
    // 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
    let u: undefined = undefined
    let n: null = null
    console.log(u);
    console.log(n);

    let numUndefined: number = undefined
    console.log(numUndefined);
    numUndefined = null
    console.log(numUndefined);
    console.log('======================================');

    // 数组
    // 第一种，可以在元素类型后面接上[]
    let arr1: number[] = [1,2,3]
    // 第二种方式是使用数组泛型，Array<元素类型>
    let arr2: Array<number> = [1,2,3]
    console.log(arr1, arr2);

    // 元组类型
    // 使用的时候数据类型的位置及数据的个数是前后一致的
    // let arr3: [string, number, boolean] = [180, '小腊肠', true] // error
    let arr3: [string, number, boolean] = ['小腊肠', 180, true]
    console.log(arr3);
    console.log(arr3[0].split(''));
    console.log(arr3[1].toFixed(2));

    // enum 枚举类型
    /* 默认情况下，从 0 开始为元素编号。
    或者，全部都采用手动赋值
    枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 */
    enum Color{
        red,
        green,
        blue = 0
    }
    let color: Color =Color.red
    let color1: string = Color[0]
    console.log(color); 
    console.log(color1); 
    console.log(Color.red, Color.green, Color.blue);

    // any
    let anybb: any = 100
    anybb = '年少不知富婆好，错把少女当成宝！'
    console.log(anybb);
    // 当一个数组中要存储多搁数据，个数、类型不确定，此时可以使用any类型来定义数组
    let arr111: any[] = [100, '年少不知软饭香，错把青春倒插秧', true]
    console.log(arr111);
    // 没有错误提示 编译通过无提示
    // console.log(arr111[0].split(''));


    // void 表示没有任何类型，只能为它赋予undefined 和 null 
    function showMsg():void {
        console.log('ttxn');
    }
    console.log(showMsg());
    let vd: void = undefined
    console.log(vd);
    console.log('======================================');


    // Object
    function getObj(obj: object):object {
        console.log(obj);
        return {
            name: 'wy',
            age: 28
        }
    }
    // console.log(getObj({name:'cb', age:29}));
    console.log(getObj(new String('123')));
    console.log(getObj(Number));

    // 联合类型
    // 联合类型（Union Types）表示取值可以为多种类型中的一种
    // 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
    function getString(str: number|string):string {
        return str.toString()
    }
    console.log(getString('123'));
    // 需求2: 定义一个一个函数得到一个数字或字符串值的长度
    function getLength(str: number|string):number {
        // return str.toString().length
        // 类型断言 (<string>str) 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构
        // 语法:
        // 方式一: <类型>值
        // 方式二: 值 as 类型  tsx中只能用这种方式

        if((<string>str).length) {
            return (str as string).length
        } else {
            return str.toString().length
        }
    }
    console.log(getLength('654321'));
    console.log(getLength(12345));

    // 类型推断
    // 类型推断: TS会在没有明确的指定类型的时候推测出一个类型
    // 有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型
    let txt = 100 // 推断 number
    // txt = '123' // 不是number
    console.log(txt);

})()