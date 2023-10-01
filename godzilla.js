function godzilla(input) {

    let budget = Number(input[0]);
    let static = Number(input[1]);
    let suitPerStat = Number(input[2]);
    let bonus = 0.0;

    let filmDecour = budget * 0.10;
    let suits = static * suitPerStat;

    if (static > 150) {
        bonus = suits * 0.10;
    }

    let suitPrice = suits - bonus;
    let finalPrice = filmDecour + suitPrice;

    let priceNeeded = budget - finalPrice;
    let priceleft = finalPrice - budget;

    if (finalPrice > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${priceleft.toFixed(2)} leva more.`);
    } else if (finalPrice <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${priceNeeded.toFixed(2)} leva left.`)
    }
}
godzilla(["9587.88", "222", "55.68"]);
