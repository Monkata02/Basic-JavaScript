function paint(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursNedded = Number(input[3]);

    let materiels = (nylon + 2) * 1.5 + (paint + paint * 0.1) * 14.5 + thinner * 5 + 0.4;
    let workers = materiels * 0.3 * hoursNedded;

    let finalResult = materiels + workers;



    console.log(finalResult);

}
