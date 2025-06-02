function tablePerkalian(a) {
  for (let i = 1; i <= a; i++) {
    let row = ''
    for (let j = 1; j <= a; j++) {
      row += i * j + '\t'
    }
    console.log(row)
  }
}
tablePerkalian(8)