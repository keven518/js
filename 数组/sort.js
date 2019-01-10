/*
* sort: 实现10以内的数组的排序
* 参数：无或者回调函数
* 返回值：排序后的数组
* 原有数组改变
*/

let arr = [12, 23, 34, 2, 95, 48, 98, 65, 45, 77, 98]
console.log(arr.sort())
console.log(arr.sort((a, b)=>a-b))
console.log(arr)