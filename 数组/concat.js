/*
* concat: 讲多个数组拼接在一起
* 参数：slice(n, m) 从索引n开始找到索引m处(不包含m)
* 返回值：拼接后组成的数组
* 原有数组不变
*/

let arr = [12, 23, 34, 2, 95, 48, 98, 65, 45, 77, 98]
console.log(arr.concat([13, 24], [78, 98], '柯文', 44))
console.log(arr)