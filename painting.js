function painting(input) {
    let paintBucket = Number(input[0]);
    let paperRolls = Number(input[1]);
    let PricePerGloves = Number(input[2]);
    let PricePerBrush = Number(input[3]);

    let PriceForBucket = 21.50;
    let PriceForRolls = 5.20;
    let NeededGloves = Math.ceil(paperRolls * 0.35);
    let NeededBrushes = Math.floor(paintBucket * 0.48);

    let PriceForPaint = PriceForBucket * paintBucket;
    let PriceForWalls = PriceForRolls * paperRolls;
    let PriceForGloves = NeededGloves * PricePerGloves;
    let PriceForBrushes = NeededBrushes * PricePerBrush;

    let PriceSum = (PriceForPaint + PriceForWalls + PriceForGloves + PriceForBrushes).toFixed(2);
    let discount = (PriceSum * 1/15);
    console.log(`This delivery will cost ${discount.toFixed(2)} lv.`);

}
