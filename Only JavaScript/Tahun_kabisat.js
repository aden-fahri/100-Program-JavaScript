function tahunKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
        console.log(tahun + " adalah tahun kabisat");
    } else {
        console.log(tahun + " bukan tahun kabisat");
    }
}

tahunKabisat(2000);
tahunKabisat(2024);