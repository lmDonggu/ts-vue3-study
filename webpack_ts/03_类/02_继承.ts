// 继承：类与类之间的关系
// 类继承后， 类与类之间的叫法：
// A类继承B这个类，此时A类叫子类，B类叫基类
// 子类---->派生类
// 基类---->超类（父类）
// 一旦发生了继承的关系，就出现父子类的关系（叫法）
(() => {

    // 定义一个超类/基类/父类
    class Person {
        // 定义属性
        name: string
        age: number
        gender: string
        constructor(name: string='donggu', age: number=18, gender: string='man') {
            // 更新属性
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 实例方法
        sayHi(str: string) {
            console.log(`I'm ${this.name}, ${str}，这是超类中的方法`);
        }
    }

    // 定义一个子类继承Person
    class Student extends Person {
        // 调用的是父类（超类）的构造函数，使用的是super
        constructor (name: string, age: number, gender: string){
            super(name, age, gender)
        }
        // 可以调用父类中的方法
        sayHi() {
            console.log('子类方法');
            super.sayHi('super关键字调用超类方法')
        }
    }

    // 实例化Person
    const person = new Person('xiaodonggu', 29, 'women')
    person.sayHi('gege')
    // 实例化Student
    const stu = new Student('zhutou', 18, 'women')
    stu.sayHi()
    // 总结：类和类之间如果要有继承关系，需要使用extends 关键字
    // 子类中可以调用超类中的构造函数，使用super关键字
    // （包括调用超类中的实例方法，也可以使用super）
    // 子类中可以重写父类中的方法
})()