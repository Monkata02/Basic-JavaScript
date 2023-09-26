function solve(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);


    }

    let evenNums = 0;
    let oddNums = 0;

    for (let num of arr) {
        if (num % 2 == 0) {
            evenNums += num;

        } else {
            oddNums += num;

        }
    }
    console.log(evenNums - oddNums);
}
solve([1, 2, 3, 4, 5, 6]);