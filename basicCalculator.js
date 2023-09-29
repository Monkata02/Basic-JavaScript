function calculator(input) {

    let deposite = Number(input[0]);
    let timeDeposite = Number(input[1]);
    let yearProcent = Number(input[2]) / 100;

    let finalPrice = deposite + timeDeposite * ((deposite * yearProcent) / 12);

    console.log(finalPrice);
}
