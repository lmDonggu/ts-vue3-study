/* 
类类型: 实现接口
1. 一个类可以实现多个接口
2. 一个接口可以继承多个接口
与 C# 或 Java 里接口的基本作用一样，
TypeScript 也能够用它来明确的强制一个类去符合某种契约。
*/
(() => {
    // 接口
    interface IFly {
        // 该方法没有任何的实现（方法中什么都没有）
        fly()
    }
    // 类，类的类型就是上面的接口(IFly 接口约束当前类)
    // 实现接口中的方法，类实现了接口方法
    class Person implements IFly {
        fly() {
            console.log('我很帅！');
        }
    }
    const person = new Person()
    person.fly()

    interface ISwim{
        swim()
    }
    // 定义类，类的类型就是IFly和ISwim(类实现多接口，一个类可以被多接口进行约束)
    class Person2 implements IFly,ISwim {
        fly() {
            console.log('我飞了');
        }
        swim() {
            console.log('我潜水了');
        }
    }
    const person2 = new Person2()
    person2.fly()
    person2.swim()

    // 总结：类可以通过接口的方式，类定义当前这个类的类型
    // 类可以实现一个接口，类也可以实现多个接口，注意，接口中的内容要真正的实现

    // 接口可以继承其他的多个接口
    interface IMyFS extends IFly, ISwim{}
    // 定义类，实现IMyFS接口
    class Person3 implements IMyFS {
        fly() {
            console.log('我飞了!');
        }
        swim() {
            console.log('我潜水了!');
        }
    }
    const person3 = new Person3()
    person3.fly()
    person3.swim()




})()