function demo(input) {

    let penPacs = Number(input[0]);
    let markerPacs = Number(input[1]);
    let cleanerL = Number(input[2]);
    let discount = Number(input[3] / 100);

    let penSum = penPacs * 5.80;
    let markerSum = markerPacs * 7.20;
    let cleanerSum = cleanerL * 1.20;

    let allSums = penSum + markerSum + cleanerSum;
    let sumDiscount = allSums * discount;
    let finalResult = allSums - sumDiscount;

    console.log(finalResult);

}
