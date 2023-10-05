function solve(input) {
    let days = Number(input[0]);
    let players = Number(input[1]);
    let energyOfGroup = Number(input[2]);
    let waterPerPerson = Number(input[3]);
    let foodPerPerson = Number(input[4]);
    let waterNeeded = days * players * waterPerPerson;
    let foodNeeded = days * players * foodPerPerson;

    let energyP = 0.95;
    let waterP = 0.70;
    let energyLost1 = Number(input[5]);
    let energyLost2 = Number(input[6]);
    let energyLost3 = Number(input[7]);
    let energyLost4 = Number(input[8]);
    let energyLost5 = Number(input[9]);
    let energyLost6 = Number(input[10]);
    let energyLost7 = Number(input[11]);
    let energyLost8 = Number(input[12]);
    let energyLost9 = Number(input[13]);
    let energyLeft = 0;

    for (let index = 1; index <= days; index++) {
        energyLeft = energyOfGroup - energyLost1;
        if (index % 2 === 0) {
            energyLeft - (energyLeft * energyP);

        }

    }

    console.log(energyLeft);

}

solve([10, 7, 5035.5, 11.3, 7.2, 942.3, 500.57, 520.68, 505.99, 630.3, 784.20, 321.21, 456.8, 330]);
