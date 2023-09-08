function solve(arr) {

    let result = []
    let biggest = arr[0];

    for (let index = 0; index < arr.length; index++) {
        let currentNum = arr[index];
        if (currentNum >= biggest) {
            result.push(currentNum);
            biggest = currentNum;
        }
        
    }
    return result;
}

/* Extract Increasing Subsequence from Array */
