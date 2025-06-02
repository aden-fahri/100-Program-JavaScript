function tablePerkalian(a) {
  let i = 1;
  while (i <= a) {
    let j = 1;
    let row = "";
    while (j <= a) {
      row += i * j + "\t";
      j++;
    }
    console.log(row);
    i++;
  }
}
tablePerkalian(5);
