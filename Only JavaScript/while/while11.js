function looping(a) {
  let i = 1;
  while (i <= a) {
    console.log(" ".repeat(i - 1) + "*");
    i++;
  }
  i = a - 1;
  while (i >= 1) {
    console.log(" ".repeat(i - 1) + "*");
    i--;
  }
  i = 1;
  while (i <= a) {
    console.log(" ".repeat(i - 1) + "*");
    i++;
  }
  i = a - 1;
  while (i >= 1) {
    console.log(" ".repeat(i - 1) + "*");
    i--;
  }
}
looping(3);
