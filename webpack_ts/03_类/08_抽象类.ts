/* 抽象类：包含抽象方法（一般没有任何的具体内容的实现），也可以包含实例方法，
抽象类是不能实例化，为了让子类进行实例化及实现内部的抽象方法 */
// abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

// 抽象类的目的 或者是作用 都是为了子类服务的
(() => {
    abstract class Animal {
        // 抽象属性 不赞成这种写法
        // abstract name: string = '小号'

        // 抽象方法

        /* 报错的，抽象方法不能有具体的实现
        abstract eat() {} */
        
        abstract eat()

        // 实例方法
        sayHi() {
            console.log('您好啊');
        }
    }
    // 不能实例化抽象类的对象
    // const ani: Animal = new Animal()

    // 定义一个子类（派生类） Dog
    class Dog extends Animal {
        // name: string = '大号'
        // 重新实现抽象类中的方法，此时这个方法就是当前Dog的实例方法
        eat() {
            console.log('慢慢吃');
        }
    }
    const dog: Dog = new Dog()
    dog.eat()
    // 调用的是抽象类中的方法
    dog.sayHi()
    // console.log(dog.name);
})()