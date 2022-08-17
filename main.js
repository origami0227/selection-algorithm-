//递归写法

let min = (numbers) => {
  if (numbers.length > 2) {
    return min([numbers[0], min(numbers.slice(1))]);
  } else {
    return Math.min.apply(null, numbers);
  }
}; //求数组最小值

let minIndex = (numbers) => numbers.indexOf(min(numbers)); //拿到最小值的下标

let sort = (numbers) => {
  if (numbers.length > 2) {
    let index = minIndex(numbers); //最小值下标
    let min = numbers[index]; //找到最小值
    numbers.splice(index, 1); //把当前最小值从数组冲剔除
    return [min].concat(sort(numbers)); //递归：继续排序剩余数组
  } else {
    return numbers[0] < numbers[1] ? numbers : numbers.reverse();
  }
};
//思路： 每次找到最小的放在前面，然后对后面的数做同样的事
