function solve(matrix) {
    let isMagical = true;

    for (let index = 0; index < matrix.length - 1; index++) {
        let sumRowFirst = matrix[index].reduce((a,b) => a + b ,0);
        let sumRowSecond = matrix[index + 1].reduce((a,b) => a + b ,0); 
        let sumColOne = 0;
        let sumColTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumColOne += matrix[index][j]
            sumColTwo += matrix[index + 1][j]
        }

        if (sumRowFirst !== sumRowSecond || sumColOne !== sumColTwo) {
            isMagical = false;
        }
    }

    return isMagical;

}
