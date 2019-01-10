let arr = [12, 23, 34]

let obj = {name: 'keven', age: 38}

console.log('array: ', Array.isArray(arr))
console.log('instanceof: ', arr instanceof Array)
console.log('constructor: ', arr.constructor === Array)
console.log(arr.__proto__)



console.log('array: ', Array.isArray(obj))
console.log('instanceof: ', obj instanceof Array)
console.log('constructor: ', obj.constructor === Array)

Array.prototype.kk = 1314520
// for只能遍历到数组私有的一些属性
for(var i=0; i<arr.length; i++){
  console.log(arr[i])
}

// for in可以把一些自定义的公共属性也能遍历到
for(var key in arr){
  console.log(arr[key])
}