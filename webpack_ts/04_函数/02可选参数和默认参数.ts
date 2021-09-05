// 可选参数：函数在声明的时候，内部参数使用了 ? 进行修饰，表示该参数可传入也可不传入
// 默认参数：函数在声明的时候，内部参数有自己默认值
(() => {
    const getFullName = function(firstName: string='西方', lastName?: string): string {
        if (lastName) {
            return firstName + '-' + lastName
        } else {
            return firstName
        }
    }
    console.log(getFullName());
    console.log(getFullName('东方'));
    console.log(getFullName('卧龙','凤雏'));
})()
