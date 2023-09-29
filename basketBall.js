function basketBall(input) {

    let yearDebt = Number(input[0]);
    let basketShoes = yearDebt - ((yearDebt * 40) / 100);
    let sportsWear = basketShoes - ((basketShoes * 20) / 100);
    let baskeBall = sportsWear * 25 / 100;
    let basketAccs = baskeBall * 20 / 100;

    let finalPrice = yearDebt + basketShoes + sportsWear + baskeBall + basketAccs;


    console.log(finalPrice);

}
