function shopping(input) {

    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);
    let bonus = 0.0;

    let priceGPU = GPU * 250;
    let priceCPU = CPU * (priceGPU * 0.35);
    let priceRAM = RAM * (priceGPU * 0.10);

    let finalPrice = priceGPU + priceCPU + priceRAM;

    if (GPU > CPU) {
        bonus = 0.15;
    } else {
        bonus = 0.0;
    }

    let priceWithoutBonus = (finalPrice * bonus);
    let priceNeeded = finalPrice - priceWithoutBonus;
    
    if (priceNeeded <= budget) {
        console.log(`You have ${(budget - priceNeeded).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(priceNeeded - budget).toFixed(2)} leva more!`);
    }    
   
    
}
shopping(["920.45", "3", "1", "1"]);
