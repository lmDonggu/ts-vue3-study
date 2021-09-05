// 函数中有多个泛型的参数
(() => {
    function getMsg<K, V> (value1: K, value2: V): [K , V] {
        return [value1, value2]
    }
    const arr1 = getMsg<string, number> ('donggu', 520.1314)
    console.log(arr1[0].split(''));
    console.log(arr1[1].toFixed(2));
})()