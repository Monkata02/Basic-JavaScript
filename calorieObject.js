function solve(arr) {

    let obj = {};

    for (let index = 0; index < arr.length; index += 2) {
        let product = arr[index];
        let calories = arr[index +1];
        obj[product] = Number(calories); 
    }
    console.log(obj);


}
