function fruitOrVegetable(input) {

    let product = input[0];
    let fruit = "";
    let vegetable = "";
    let unknown = "";

    if (product == "banana" || product == "apple" || product == "kiwi" || product == "cherry" || product == "lemon" || product == "grapes") {
        product = "fruit";
    } else if (product == "tomato" || product == "cucumber" || product == "pepper" || product == "carrot") {
        product = "vegetable";
    } else {
        product = "unknown";
    }
console.log(product);
}
