function solve(arr) {

    let newArr = [];
    let num = 0;

    for (let index = 0; index < arr.length; index++) {
        num++;
        let command = arr[index];
        if (command == "add") {
            newArr.push(num)                              //push for adding a number into the array
        } else if (command == "remove") {
            newArr.pop()                                 //pop for removing a number from the array
        }
    }
    if (newArr.length == 0) {                           //.length for checking the length of the array
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));                 // join('\n') for printing them on a new line
    }

}
