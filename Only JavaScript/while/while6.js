function looping(rows) {
  let i = rows;
  while (i >= 1) {
    let row = "";
    let j = 1;
    while (j <= i) {
      row += j + " ";
      j++;
    }
    console.log(row);
    i--;
  }
}
looping(5);
