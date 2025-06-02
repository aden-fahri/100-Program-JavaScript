function looping(a) {
  for (let i = 1; i <= a; i++) {
    console.log(" ".repeat(i - 1) + "*");
  }
  for (let i = a - 1; i >= 1; i--) {
    console.log(" ".repeat(i - 1) + "*");
  }
  for (let i = 1; i <= a; i++) {
    console.log(" ".repeat(i - 1) + "*");
  }
  for (let i = a - 1; i >= 1; i--) {
    console.log(" ".repeat(i - 1) + "*");
  }
}
looping(3);
