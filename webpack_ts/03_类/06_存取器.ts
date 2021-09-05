/* 存取器：让我们可以有效控制对 对象中成员的访问；
通过getters和setters来进行操作 */
(() => {
    class Person {
        firstName: string
        lastName: string
        constructor (firstName: string, lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
        }
        // 姓名的成员属性（外部可以访问和修改
        
        // 读取器
        get fullName() {
            console.log('get...');
            return this.firstName + '_' + this.lastName
        }
        // 设置器
        set fullName(val) {
            console.log('set...');
            let name = val.split('_')
            this.firstName = name[0]
            this.lastName = name[1]
        }
    }
    const person = new Person('西方', '失败')
    console.log(person);
    console.log(person.fullName);
    person.fullName = '大内密探_007'
    console.log(person.fullName);
})()