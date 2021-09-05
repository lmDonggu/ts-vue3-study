// 类型注解
// 类型注解：是一种轻量级的为函数或者变量添加的约束
(function () {
    function showMsg(str) {
        return '自古多情空余恨，' + str;
    }
    var msg = '此恨绵绵无绝期。';
    console.log(showMsg(msg));
})();
