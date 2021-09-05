// 泛型类
// 在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型
(() => {
    // 定义一个类，类中的属性值的类型不确定，方法中的参数及返回值类型也是不确定
    // 定义一个泛型类
    class GenericNumber<T> {
        // 默认的属性的值 的类型是泛型类型
        defaultValue: T
        add: (x:T, y:T) => T
    }
    // 在实例化类的对象的时候，在确定泛型的类型
    const g1: GenericNumber<number> = new GenericNumber<number>() 
    g1.defaultValue = 100
    g1.add = function(x, y) {
        return x + y
    }
    console.log(g1.add(10,20));
    console.log(g1.add(g1.defaultValue,20));


    const g2: GenericNumber<string> = new GenericNumber<string>() 
    g2.defaultValue = '哈哈'
    g2.add = function(x, y) {
        return x + y
    }
    console.log(g2.add('西方','失败'));
    console.log(g2.add('西方',g2.defaultValue));
})()