function looping(rows) {
  let i = 1;
  while (i <= rows) {
    const spaces = " ".repeat(rows - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
    i++;
  }
}
looping(5);
