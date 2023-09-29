function catLife(input) {
    let catType = input[0];
    let Gender = input[1];
    let catYears = 0.0;

    switch(catType) {
        case "British Shorthair":
            if (Gender === "m") {
                catYears = 13;
            } else if (Gender === "f") {
                catYears = 14;
            };break;
        case "Siamese":
            if (Gender === "m") {
                catYears = 15;
            } else if (Gender === "f") {
                catYears = 16;
            };break;
        case "Persian":
            if (Gender === "m") {
                catYears = 14;
            } else if (Gender === "f") {
                catYears = 15;
            };break;
        case "Ragdoll":
            if (Gender === "m") {
                catYears = 16;
            } else if (Gender === "f") {
                catYears = 17;
            };break;
        case "American Shorthair":
            if (Gender === "m") {
                catYears = 12;
            } else if (Gender === "f") {
                catYears = 13;
            };break;
        case "Siberian":
            if (Gender === "m") {
                catYears = 11;
            } else if (Gender === "f") {
                catYears = 12;
            };break;
    }
    let humanMnts = catYears * 12;
    let catMnts = humanMnts / 6;
    if (catType === "British Shorthair" || catType === "Siamese" || catType === "Persian" || catType === "Ragdoll" || catType === "American Shorthair" || catType === "Siberian") {
        console.log(`${Math.floor(catMnts)} cat months`);
    } else {
        console.log(`${catType} is invalid cat!`);
    }
}
