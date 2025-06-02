function looping(a) {
  for (let i = 1; i <= a; i++) {
    let row = "";
    for (let j = 1; j <= a; j++) {
      if (j === i || j === a - i + 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
looping(5);
