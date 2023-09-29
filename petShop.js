function petShop(input) {

    let dogFood = Number(2.50);
    let catFood = Number(4);
    
    let dogPack = Number(input[0] * dogFood);
    let catPack = Number(input[1] * catFood);

    let finalResult = Number (dogPack + catPack);


    console.log(finalResult);


}  
