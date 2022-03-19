function quickSort(list) {
  if (list.length < 2) {
    
    return list;
  }

  const pivot = list[0];
  let left = [];
  let right = [];
  while (list.length) {
    let count = 0;
    if (list[count] <= pivot) {
      left.push(list[count]);
      list.shift();
    }
    if (list[count] > pivot) {
      right.push(list[count]);
      list.shift;
    }
  }

  return left.concat(right);
  //   [quickSort(left)].concat([pivot, quickSort(right)]);
}

let l = [1, 6, 4, 6, 3, 9];
console.log(quickSort(l));
