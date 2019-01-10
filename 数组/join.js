/*
* join: 把数组按照指定的分隔符换为
* 参数：指定的连接符
* 返回值：转换后的字符串
* 原有数组不变
*/

let arr = [12, 23, 34, 2, 95, 48, 98, 65, 45, 77, 98]
console.log(arr.join('+'))
console.log(eval(arr.join('+')))
console.log(arr)