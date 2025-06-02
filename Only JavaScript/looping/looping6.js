function looping(rows) {
  for (let i = rows; i >= 1; i--) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += j + " ";
    }
    console.log(row);
  }
}

looping(5);
