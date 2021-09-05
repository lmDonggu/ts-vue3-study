// 修饰符（类中的成员的修饰符）： 主要是描述类中的成员（属性，构造函数，方法）的可访问性
// 类中的成员都有自己默认的访问修饰符，public
// public 修饰符，类中成员默认的修饰符代表公共的，任何位置都可以访问类中的成员
// private 修饰符，只能类内部可以访问,子类中也无法访问该成员属性
// protected: 类内部和子类可以访问
(() => {
    // 定义一个类
    class Person {
        // 公有 默认修饰符，允许外部访问
        // public name: string

        // 私有，拒绝外部和子类访问
        // private name: string

        // protected: 类内部和子类可以访问
        protected name: string
        
        public constructor(name: string) {
            this.name = name
        }
        public eat () {
            console.log('嗯，这个好吃。', this.name);
        }
    }
    // 定义一个子类
    class Student extends Person {
        constructor (name: string) {
            super(name)
        }
        play() {
            console.log('我就喜欢玩布娃娃', this.name);
        }
    }


    const per = new Person('大蛇丸')
    // 类的外部可以访问类中的属性成员
    // console.log(per.name);
    per.eat()
    const stu = new Student('红豆')
    stu.play()
    // console.log(stu.name);
})()