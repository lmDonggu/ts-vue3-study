// 接口是一种能力，一种约束而已
(() => {

    interface PersonName {
        firstName: string
        lastName: string
    }
    // 输出姓名
    function showFullName(person: PersonName) {
        return 'Hello, ' +  person.firstName + '-' + person.lastName
    }
    // 定义的一个对象
    const user = {
        firstName: 'Any',
        lastName: '宁碰'
    }
    console.log(showFullName(user));

})()