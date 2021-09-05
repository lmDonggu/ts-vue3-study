/* 静态成员：在累涨通过static 修饰的属性或方法，那么就是静态成员
静态成员在使用的时候是通过  类名.  的这种语法来调用 */
(() => {
    class Person {
        
        static name1: string = '静态名字'
        // 构造函数是不能通过static 来修饰
        constructor () {
            // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
            // this.name1 = name
        }
        static sayHi() {
            console.log('hello world');
        }
    }
    const person = new Person()
    // 通过实例对象 调用的属性和方法
    // console.log(person.name1);
    // person.sayHi()
    // 通过类名.静态属性的方式来访问该成员数据
    console.log(Person.name1);
    // 通过类名.静态属性的方式来设置该成员数据
    Person.name1 = '猪头'
    console.log(Person.name1);
    // 通过类名.静态方法的方式来调用内部静态方法
    Person.sayHi()

})()