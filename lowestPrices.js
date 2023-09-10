function solve(arr) {

    let obj = {};

    for (let index = 0; index < arr.length; index++) {
        let text = arr[index];
        let productInfo = text.split(' | ');
        let town = productInfo[0];
        let product = productInfo[1];
        let price = Number(productInfo[2]); 
        if (!obj.hasOwnProperty(product)) {
            obj[product] = {town, price};
        } else {
            if (price < obj[product].price) {
                obj[product] = {town, price};
            }
        }
    }
    let productNames = Object.keys(obj);
    for (let index = 0; index < productNames.length; index++) {
        let productName = productNames[index];
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`);
        
    }

}
