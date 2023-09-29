function catDiet(input) {
    let mass = Number(input[0]);
    let protein = Number(input[1]);
    let vug = Number(input[2]);
    let AllKal = Number(input[3]);
    let waterP = Number(input[4]);

    let gramMass = 9;
    let gramProtein = 4;
    let gramVug = 4;

    let allGramsMass = (AllKal * mass) / gramMass;
    let allGramsProtein = (AllKal * protein) / gramProtein;
    let allGramsVug = (AllKal * vug) / gramVug;

    let foodWeight = (allGramsMass + allGramsProtein + allGramsVug) / 100;
    let caloriesPerGram = AllKal / foodWeight;
    let gramLeft = (100 - waterP);
    let calories = (caloriesPerGram * gramLeft) / 100;

    console.log(`${calories.toFixed(4)}`)

}
