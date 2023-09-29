function fishTank(input) {

    let lenghtInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let hightInCm = Number(input[2]);

    let percent = Number(input[3] / 100);
    
    let capacity = lenghtInCm * widthInCm * hightInCm;
    let capacityInLiters = capacity * 0.001;
    let neededLiters =  capacityInLiters * (1 - percent);

    console.log(neededLiters);
    
}
