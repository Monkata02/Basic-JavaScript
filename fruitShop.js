function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch (fruit) {
            case "banana": console.log((amount * 2.50).toFixed(2)); break;
            case "apple": console.log((amount * 1.20).toFixed(2)); break;
            case "orange": console.log((amount * 0.85).toFixed(2)); break;
            case "grapefruit": console.log((amount * 1.45).toFixed(2)); break;
            case "kiwi": console.log((amount * 2.70).toFixed(2)); break;
            case "pineapple": console.log((amount * 5.50).toFixed(2)); break;
            case "grapes": console.log((amount * 3.85).toFixed(2)); break;
            default: console.log("error");
        }
    } else if (day == "Saturday" || day == "Sunday") {
        switch (fruit) {
            case "banana": console.log((amount * 2.70).toFixed(2)); break;
            case "apple": console.log((amount * 1.25).toFixed(2)); break;
            case "orange": console.log((amount * 0.90).toFixed(2)); break;
            case "grapefruit": console.log((amount * 1.60).toFixed(2)); break;
            case "kiwi": console.log((amount * 3.00).toFixed(2)); break;
            case "pineapple": console.log((amount * 5.60).toFixed(2)); break;
            case "grapes": console.log((amount * 4.20).toFixed(2)); break;
            default: console.log("error");
        } 
    } else {
        console.log("error");
    }
}
fruitShop(["kiwi", "Monday", "3"]);
