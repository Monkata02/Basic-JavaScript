function solve(type, grams, pricePerKg) {

    let kilograms = grams / 1000;
    let price = kilograms * pricePerKg;

    console.log(` I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${type}.`)

}
