// 向数组的末尾追加新的元素
// 参数一个到多个，用逗号隔开
// 返回值：新增后数组的长度
// 原有数组改变了

let arr = [12, 23, 34]
console.log(arr.push('柯文', 8, {name: '蔡曼曼'}, (str)=>{
  console.log(str)
}))
console.dir(arr )
arr[6]('kkk')