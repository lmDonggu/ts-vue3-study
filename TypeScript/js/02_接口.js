// 接口是一种能力，一种约束而已
(function () {
    // 输出姓名
    function showFullName(person) {
        return 'Hello, ' + person.firstName + '-' + person.lastName;
    }
    // 定义的一个对象
    var user = {
        firstName: 'Any',
        lastName: '宁碰'
    };
    console.log(showFullName(user));
})();
