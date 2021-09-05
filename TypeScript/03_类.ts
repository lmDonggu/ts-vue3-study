// TS中书写js 中的类，演示效果
(() => {
    // 定义一个接口
    interface IPerson {
        firstName: string
        lastName: string
    }
    // 定义一个类型
    class Person {
        // 定义公共的字段（属性）
        firstName: string
        lastName: string
        fullName: string
        // 定义一个构造器函数
        constructor(firstName: string, lastName: string) {
            // 更新属性
            this.firstName = firstName
            this.lastName = lastName
            // 姓名
            this.fullName = this.firstName + this.lastName
        }
    }
    // 定义个函数
    function showFullName(person: IPerson) {
        return person.firstName + person.lastName
    }
    // 实例化对象
    const person = new Person('li', 'wenyuan')
    console.log(showFullName(person));
})()