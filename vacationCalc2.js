function vacation(numOfPeople, typeOfGroup, dayOfWeek) {
    let totalPrice;

    switch (typeOfGroup) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                totalPrice = numOfPeople * 8.45;
            } else if (dayOfWeek === 'Saturday') {
                totalPrice = numOfPeople * 9.80;
            } else {
                totalPrice = numOfPeople * 10.46
            }

            if (numOfPeople >= 30) {
                totalPrice -= totalPrice * 0.15;
            }
            break;
        case 'Business':
            if (numOfPeople >= 100) {
                numOfPeople -= 10;
            }
            if (dayOfWeek === 'Friday') {
                totalPrice = numOfPeople * 10.90;
            } else if (dayOfWeek === 'Saturday') {
                totalPrice = numOfPeople * 15.6;
            } else {
                totalPrice = numOfPeople * 16;
            }
            break;
        case 'Regular':
            if (dayOfWeek === 'Friday') {
                totalPrice = numOfPeople * 15;
            } else if (dayOfWeek === 'Saturday') {
                totalPrice = numOfPeople * 20;
            } else {
                totalPrice = numOfPeople * 22.5;
            }

            if (numOfPeople >= 10 && numOfPeople <= 20) {
                totalPrice -= totalPrice * 0.05;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
