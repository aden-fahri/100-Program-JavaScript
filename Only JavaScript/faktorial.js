function faktorial(a) {
  if (a === 0) return 1;
  else return a * faktorial(a - 1);
}
console.log(faktorial(5));
