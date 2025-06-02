function looping(rows) {
  for (let i = rows; i >= 1; i--) {
    const spaces = " ".repeat(rows - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

looping(5);
