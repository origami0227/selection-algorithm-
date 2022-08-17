//循环写法
//思路：每次找到最小的数放前面，然后i++
let minIndex = (numbers) => {
  let index = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i; //遍历过程中每遇到一个比当前数小的数就认为是最小值，直到遍历结束
    }
  }
  return index;
};
//minIndex拿到最小数的下标

// let sort = (numbers) => {
//     for(let i=0; i<???; i++){
//       let index = minIndex(numbers)
//       // index 是当前最小数的下标
//       // index 对应的数应该放到 i 处
//       swap(numbers, index, i) // swap 还没实现
//       // index、i 都是 index 的意思，建议 i 改名
//     }
//   }

//实现swap交换
//思路：找到一个容器存放，然后交换
let swap = (array, i, j) => {
  let temp = array[i]; //把i放入容器temp
  array[i] = array[j]; //j给i
  array[j] = temp; //容器中的内容i给j，实现交换
};
swap(number, 1, 2);

//js的析构赋值可以实现交换
let a = 1;
let b = 2;
[a, b] = [b, a];

let sort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    let index = minIndex(numbers.slice(i)) + i;
    if (index != i) {
      swap(numbers, index, i);
    }
  }
  return numbers;
};
