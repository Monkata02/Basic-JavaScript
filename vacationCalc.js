function vac(peopleCount, groupType, dayOfWeek) {

    let studentFrPrice = 8.45;
    let businessFrPrice = 10.9;
    let regularFrPrice = 15;
    let studentSatPrice = 9.8;
    let businessSatPrice = 15.6;
    let regularSatPrice = 20;
    let studentSunPrice = 10.46;
    let businessSunPrice = 16;
    let regularSunPrice = 22.5;

    let studentsDiscountPer = 15;
    let buisnessDiscountCount = 10;
    let regularDiscountPer = 5;

    let totalPrice = 0;

    if (groupType === "Business" && peopleCount >= 100) {
        peopleCount -= buisnessDiscountCount;
    }

    if (groupType === "Students" && dayOfWeek === "Friday") {
        totalPrice += peopleCount * studentFrPrice;
    } else if (groupType === "Students" && dayOfWeek === "Saturday") {
        totalPrice += peopleCount * studentSatPrice;
    } else if (groupType === "Students" && dayOfWeek === "Sunday") {
        totalPrice += peopleCount * studentSunPrice;
    } else if (groupType === "Regular" && dayOfWeek === "Friday") {
        totalPrice += peopleCount * regularFrPrice;
    } else if (groupType === "Regular" && dayOfWeek === "Saturday") {
        totalPrice += peopleCount * regularSatPrice;
    } else if (groupType === "Regular" && dayOfWeek === "Sunday") {
        totalPrice += peopleCount * regularSunPrice;
    } else if (groupType === "Business" && dayOfWeek === "Friday") {
        totalPrice += peopleCount * businessFrPrice;
    } else if (groupType === "Business" && dayOfWeek === "Saturday") {
        totalPrice += peopleCount * businessSatPrice;
    } else if (groupType === "Business" && dayOfWeek === "Sunday") {
        totalPrice += peopleCount * businessSunPrice;
    } 

    if (groupType === "Students" && peopleCount >= 30) {
        totalPrice -= (studentsDiscountPer / 100) * totalPrice
    } else if  (
            groupType === "Regular" && 
        peopleCount >= 10 && 
        peopleCount <= 20
    ) {
        totalPrice -= (regularDiscountPer / 100) * totalPrice;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


/* calculates the total price for a group of people going on a vacation based on their group type ("Students," "Regular," or "Business") and the day of the week they travel */
