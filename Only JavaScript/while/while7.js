function looping(rows) {
  let i = 1;
  while (i <= rows) {
    let row = "";
    let j = 1;
    while (j <= i) {
      row += ((1 + j) % 2) + " ";
      j++;
    }
    console.log(row);
    i++;
  }
}
looping(5);
