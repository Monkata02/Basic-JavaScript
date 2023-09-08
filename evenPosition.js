function solve(arrayString) {
    let result = [];
    for (let i in arrayString) {
        if (i % 2 == 0) {
            result.push(arrayString[i]);
        }
    }
    console.log(result.join(" "));
}
