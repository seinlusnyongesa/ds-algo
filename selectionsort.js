function sort(list) {
  let smallest = list[0];
  let smallest_idx = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] < smallest) {
      smallest = list[i];
      smallest_idx = i;
    }
  }
  return smallest_idx;
}

function sSort(list) {
  let newL = [];

  for (let j = 0; j <= list.length; j++) {
    let sm = sort(list);
    newL.push(list[sm]);
    list.splice(sm, 1);

    if (list.length) {
      j = 0;
    }
  }

  return newL;
}

console.log(sSort([4, 3, 1, 6, 7, 0, 9, 3]));
