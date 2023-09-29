function projectCreation(input) {

    let architect = (input[0]);
    let projects = (input[1]);
    let projectTime = Number (3);

    let hoursNeeded = (projects * projectTime);

    console.log(`The architect ${architect} will need ${hoursNeeded} hours to complete ${projects} project/s.`);

}
