function football(input) {

    let tshirt = Number(input[0]);
    let priceNeeded = Number(input[1]);
    let discount = 0.85;

    let shorts = (tshirt * 0.75);
    let socks = shorts * 0.20;
    let shoes = (tshirt + shorts) * 2;

    let allSums = (tshirt + shorts + socks + shoes);
    let finalPrice = allSums * discount;

    if (finalPrice >= priceNeeded) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${finalPrice} lv.`);
    } else if (finalPrice < priceNeeded) {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(priceNeeded - finalPrice).toFixed(2)} lv. more.`);
    }
}
