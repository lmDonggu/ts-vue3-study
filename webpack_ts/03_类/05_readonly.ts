// 使用 readonly 关键字将属性设置为只读的。就不能在外部被随意修改了
// 构造函数中，可以对只读的属性成员的数据进行修改
// 如果构造函数中没有任何参数，类中属性成员被readonly修饰，那外部也不能对这个属性值进行修改
(() => {


    // readonly 修饰类中的成员属性操作
    // class Person {
    //     // readonly name: string = '初代' // 初始值
    //     readonly name: string
    //     constructor(name: string = '初代') {
    //         this.name = name
    //     }
    //     sayHi() {
    //         console.log(this.name, '变身！');
    //         // 类中普通方法也是不能修改readonly修饰的成员属性值
    //         // this.name = '泰罗'
    //     }
    // }

    // const person: Person = new Person('艾斯')
    // console.log(person);
    // console.log(person.name);
    // console.log(person.sayHi());
    // // name 被readonly 修饰，该属性是只读
    // // person.name = '迪迦'
    // // console.log(person.name);

    // readonly 修饰类中的构造函数中的参数（参数属性）

    class Person {
        // 构造函数中的参数被readonly修饰后，那该参数可以叫参数属性
        // 构造函数中的name参数被readonly修饰后，那Person中就有了一个name的属性成员
        
        // 参数属性通过给构造函数参数前面添加一个访问限定符来声明。
        // 使用 private 限定一个参数属性会声明并初始化一个私有成员；
        // 对于 public 和 protected 来说也是一样。
        constructor(readonly name: string = '只读，初代') {
            this.name = name
        }
        // constructor(public name: string = '公有，初代') {
        //     this.name = name
        // }
        // constructor(private name: string = '私有，初代') {
        //     this.name = name
        // }
        // constructor(protected name: string = '内部和子类，初代') {
        //     this.name = name
        // }
    }

    const person: Person = new Person('艾斯')

    console.log(person);
    // person.name = 'zhenhao'
    console.log(person.name);
})()