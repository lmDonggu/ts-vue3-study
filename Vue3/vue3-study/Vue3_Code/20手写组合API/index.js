// 1) shallowReactive 与 reactive

// 定义一个reactiveHandler 处理对象
const reactiveHandler = {
    get(target, prop){
        if (prop==='_is_reactive') return true
        const result = Reflect.get(target, prop)
        console.log('拦截读取数据', prop, result);
        return result
    },
    set(target, prop, value){
        const result = Reflect.set(target, prop, value)
        console.log('拦截修改或添加属性', prop, value);
        return result
    },
    deleteProperty(target, prop){
        const result = Reflect.deleteProperty(target, prop)
        console.log('拦截删除数据', prop);
        return result
    }
}

// 定义一个shallowReactive 函数，传入一个目标对象
function shallowReactive(target) {
    // 判断当前的目标对象是不是object类型（对象/数组）
    if(target&&typeof target === 'object') {
        return new Proxy(target, reactiveHandler)
    }
    // 如果传入的数据是基本类型数据，那直接返回
    return target
}


// 定义一个reactive 函数，传入一个目标对象
function reactive(target) {
    // 判断当前的目标对象是不是object类型（对象/数组）
    if(target&&typeof target === 'object') {
        // 对数组或者是对象中所有的数据进行reactive的递归处理
        // 先判断当前的数据是不是数组
        if (Array.isArray(target)){
            // 数组的数据要进行遍历操作
            target.forEach((item, index)=>{
                target[index] = reactive(item)
            })
        } else{
            // 再判断当前的数据是不是对象
            // 对象的数据也要进行遍历操作
            Object.keys(target).forEach(key=> {
                target[key] = reactive(target[key])
            })

        }
        return new Proxy(target, reactiveHandler)
    }
    // 如果传入的数据是基本类型数据，那直接返回
    return target
}


// ++++++++++++++++++++++++++++++++++++++++
// 定义了一个readonlyHandler 处理器
const readonlyHandler = {
    get(target, prop){
        if(prop === '_is_readonly') return true
        const result = Reflect.get(target, prop)
        console.log('拦截读取数据', prop, result);
        return result
    },
    set(target, prop, value){
        console.warn('只能读取数据，不能修改数据或者添加数据')
        return true
    },
    deleteProperty(target, prop){
        console.warn('只能读取数据，不能删除数据');
        return true
    }
}

// 定义一个 shallowReadonly 函数
function shallowReadonly(target) {
    // 判断当前数据是不是对象
    if(target&& typeof target === 'object') {
        return new Proxy(target, readonlyHandler)
    }
    return target
}

// 定义一个readonly 函数
function readonly(target) {
    // 判断当前是不是对象
    if(target&& typeof target === 'object') {
        // 判断target 是不是数组
        if(Array.isArray(target)) {
            // 遍历数组
            target.forEach((item,index)=> {
                target[index] = readonly(item)
            })
        } else { // 判断target是不是对象
            Object.keys(target).forEach(key=> {
                target[key] = readonly(target[key])
            })
        }
        return new Proxy(target, readonlyHandler)
    }
    // 如果不是对象或数组，直接返回
    return target
}


// 定义一个shallowRef 函数
function shallowRef(target) {
    return {
        // 将target 数据保存起来
        _value: target,
        get value() {
            console.log('劫持到了读取数据');
            return this._value
        },
        set value(val) {
            console.log('劫持到了修改数据，准备更新界面',val);
            this._value = val
        }
    }
}


// 定义一个 ref 函数
function ref(target) {
    target = reactive(target)
    return {
        _is_ref: true, // 标识当前对象是ref对象
        // 将target 数据保存起来
        _value: target,
        get value() {
            console.log('劫持到了读取数据');
            return this._value
        },
        set value(val) {
            console.log('劫持到了修改数据，准备更新界面',val);
            this._value = val
        }
    }
}

// 定义一个函数 isRef ，判断当前的对象是不是 ref 对象
function isRef(obj) {
    return obj && obj._is_ref
}
// 定义一个函数 isReactive ，判断当前的对象是不是 isReactive 对象
function isReactive(obj) {
    return obj && obj._is_reactive
}
// 定义一个函数 isReadonly ，判断当前的对象是不是 isReadonly 对象
function isReadonly(obj) {
    return obj && obj._is_readonly
}
// 定义一个函数 isProxy ，判断当前的对象是不是 reactive / readonly 对象
function isProxy(obj) {
    return isReactive(obj) || isReadonly(obj)
}
  