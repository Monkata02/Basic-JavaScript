function personalTitles(input) {

    let age = Number(input[0]);
    let sexType = input[1];

    if (sexType == 'm') {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else if (sexType == 'f') {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }

}
