/**
 * Created by huangyg on 2017/4/16.
 */
const STORAGE_KEY = 'todoList'
const storage = weex.requireModule('storage')
export default {
    fetch(key) {
        var result  ;
        storage.getItem(key,event=>{
            if (event.result == 'success'){ //  能够取到数据，数据不为空
                result = event.data ;
            }else{                          //  不能取到数据，没有这个值。
                result = '[]'
            }
        })
        return JSON.parse(result);
    },
    save(items) {
        storage.setItem(STORAGE_KEY,JSON.stringify(items),event=> {
            if (event.result != 'success'){
                console.log(event.error);
            }
        })
    }

}
// parse用于从一个字符串中解析出json对象,如
// var str = '{"name":"huangxiaojian","age":"23"}'
// 结果：
// JSON.parse(str)
//
// Object
//
// age: "23"
// name: "huangxiaojian"
// __proto__: Object
// 注意：单引号写在{}外，每个属性名都必须用双引号，否则会抛出异常。
// stringify()用于从一个对象解析出字符串，如
// var a = {a:1,b:2}
// 结果：
// JSON.stringify(a)
//
// "{"a":1,"b":2}"