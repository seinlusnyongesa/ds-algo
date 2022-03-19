function sum(list) {
  return list.length == 0 ? 0 : list[0] + sum(list.slice(1));
}

console.log(sum([1, 2, 5]));
