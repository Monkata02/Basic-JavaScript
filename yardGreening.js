function yardGreening(input) {

    let kvPrice = Number (7.61);
    let sales = Number (0.18);
    let kvMetra = Number(input[0]);

    let allkv = kvMetra * kvPrice;
    let discount = sales * allkv;

    let finalPrice = allkv - discount;

    let totalPrice = finalPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

    console.log(`The totalPrice is ${totalPrice} lv.`);


}
