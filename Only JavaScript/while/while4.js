function looping(rows) {
  let i = rows;
  while (i >= 1) {
    const spaces = " ".repeat(rows - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
    i--;
  }
}
looping(5);
