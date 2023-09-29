function vacationBookList(input) {

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysNeeded = Number(input[2]);

    let timeNeeded = pages / pagesPerHour;
    let hoursNeeded = timeNeeded / daysNeeded;


    console.log(hoursNeeded);

}
