function solve(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;

    let sumAsString = String(sum);
    let type = 'Integer';

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            type = 'Float';
        }
    }
    console.log(`${sum} - ${type}`);

}
solve(9, 100, 1.1);
