function solve(input){
    let i = 0;

    let adults = 0, kids = 0 , toys = 0, sweaters = 0;
    while(i <= input.length){

        if(input[i] <= 16){
            kids++;
            toys = toys+5;

        }
        if(input[i]>16){
            adults++;
            sweaters += 15;
        }
        i++;
    }
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toys}`);
    console.log(`Money for sweaters: ${sweaters}`);
}
