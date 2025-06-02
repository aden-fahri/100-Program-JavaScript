function looping(a) {
  for (let i = 1; i <= a; i++) {
    console.log(" ".repeat(a - i) + "*".repeat(2 * i - 1));
  }
  for (let i = a; i >= 1; i--) {
    console.log(" ".repeat(a - i) + "*".repeat(2 * i - 1));
  }
}
looping(5);
