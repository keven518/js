function arr_test () {
  console.time('kv');
  const arr = [];
  for (var i=0; i<10000000; i++) {
    arr.push(i)
  }
  console.timeEnd('kv')
  console.time('cmm');
  const arrB = new Array(10000000);
  for (var i=0; i<10000000; i++) {
    arrB[i] = i
  }
  console.timeEnd('cmm')
}

arr_test();