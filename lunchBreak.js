function lunchBreak(input) {

    let series = input[0];
    let episode = Number(input[1]);
    let timeOff = Number(input[2]);

    let timeForLunch = timeOff * 1/8;
    let timeForChill = timeOff * 1/4;
    let freeTime = timeOff - timeForLunch - timeForChill;

    if (freeTime >= episode) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(freeTime - episode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(episode - freeTime)} more minutes.`);
    }


}
