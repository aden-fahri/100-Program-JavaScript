function looping(a) {
  let i = 1;
  while (i <= a) {
    console.log(" ".repeat(a - i) + "*".repeat(2 * i - 1));
    i++;
  }
  i = a;
  while (i >= 1) {
    console.log(" ".repeat(a - i) + "*".repeat(2 * i - 1));
    i--;
  }
}
looping(5)