function looping(a) {
  let i = 1;
  while (i <= a) {
    let row = "";
    let j = "";
    while (j <= a) {
      if (j === i || j === a - i + 1) {
        row += "*";
      } else {
        row += " ";
      }
      j++;
    }
    console.log(row);
    i++;
  }
}
looping(5);
