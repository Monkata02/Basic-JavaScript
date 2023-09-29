function food(input) {

    let stakeMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    
    let stakePrice = stakeMenu * 10.35;
    let fishPrice = fishMenu * 12.40;
    let veganPrice = veganMenu * 8.15;

    let menuPrice = stakePrice + fishPrice + veganPrice;
    let desertPrice = 0.2 * menuPrice;

    let allPrice = menuPrice + desertPrice + 2.50;

    console.log(allPrice);

}
