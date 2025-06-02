function biner(a) {
  let count = 0;
  while (a) {
    count += a & 1;
    a >>= 1;
  }
  return count;
}

console.log(biner(13));
console.log(biner(8));
