// 多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
(() => {
    // 父类
    class Animal {
        name: string
        constructor (name: string) {
            this.name = name
        }
        run(distance:number = 0) {
            console.log(this.name, `跑了${distance}米这么远！`);
        }
    }
    // 子类Dog
    class Dog extends Animal {
        constructor(name: string) {
            // 调用父类构造函数，实现子类中属性的初始化
            super (name)
        }
        // 实例方法，重写父类中的实例方法
        run(distance:number = 5) {
            console.log(this.name, `跑了${distance}米这么远！`);
        }
    }
    // 子类Pig
    class Pig extends Animal {
        constructor(name: string) {
            // 调用父类构造函数，实现子类中属性的初始化
            super (name)
        }
        // 实例方法，重写父类中的实例方法
        run(distance:number = 10) {
            console.log(this.name, `跑了${distance}米这么远！`);
        }
    }
    const ani : Animal = new Animal('动物')
    ani.run()
    // 实例化子类 dog 对象
    const dog: Dog = new Dog('旺财')
    dog.run()
    // 实例化子类 pig 对象
    const pig: Pig = new Pig('佩奇')
    pig.run()

    // 父类和子类的关系：父子关系，此时，父类类型创建子类的对象
    const dog1:Animal = new Dog('小黄')
    dog1.run()
    const pig1:Animal = new Pig('小猪')
    pig1.run()
})()