function worldRecord(input) {

    let worldRecordInSec = Number(input[0]);
    let distanceInMeter = Number(input[1]);
    let secForMeter = Number(input[2]);

    let totalSeconds = distanceInMeter * secForMeter;

    let delay = Math.floor(distanceInMeter / 15) * 12.5;

    let finalSeconds = totalSeconds + delay;

    if (finalSeconds < worldRecordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${finalSeconds.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(finalSeconds - worldRecordInSec).toFixed(2)} seconds slower.`);
    }


}
worldRecord(["10464", "1500", "20"]);
