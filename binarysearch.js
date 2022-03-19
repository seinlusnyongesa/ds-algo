const list = [1, 2, 3, 4, 5, 6, 7, 8, 11, 15, 34];

const bs = (l, i) => {
  let low = 0;
  let high = l.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guese = l[mid];

    if (guese == i) {
      return mid;
    }

    if (guese > i) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};
console.log(bs(list, 19));
