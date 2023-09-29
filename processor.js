function processor(input) {
    let Processors = Number(input[0]);
    let staff = Number(input[1]);
    let workingDays = Number(input[2]);

    let processorPrice = 110.10;
    let processorHours = 3;
    let staffHours = 8;

    let hoursWorking = (staff * workingDays) * staffHours;
    let processorsDone =  Math.floor(hoursWorking / processorHours)
    let ifProcessor = processorsDone - Processors;
    let elseIfProcessor = Processors - processorsDone;

    if (processorsDone >= Processors) {
        console.log(`Profit: -> ${(ifProcessor * processorPrice).toFixed(2)} BGN`)
    } else if (processorsDone < Processors) {
        console.log(`Losses: -> ${(elseIfProcessor * processorPrice).toFixed(2)} BGN`)
    }
}
