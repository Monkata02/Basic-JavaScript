function round(num, precision) {
    num = Number(num);
    precision = Number(precision);

    if (precision > 15) {
        precision = 15;
    }
    num = num.toFixed(precision);
    console.log(parseFloat(num));
}
