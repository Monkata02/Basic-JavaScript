function reverse(arr) {

    for (let i = 0; i < arr.length / 2; i++) {

        let oldElement = arr[i];
        let previusIndex = arr.length - 1 - i;
        arr[i] = arr[previusIndex];
        arr[previusIndex] = oldElement;

    }
    console.log(arr.join(' '));
}
