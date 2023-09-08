function solve(number) {
    let input = String(number);
    let isSame = true;
    let sum = 0;

    let firstDigit = input[0];

    for(let index = 0; index < input.length; index++) {
        let currentDigit = Number(input[index]);
        sum += currentDigit;
        if (firstDigit != currentDigit) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
