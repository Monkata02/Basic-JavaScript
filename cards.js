function solve(input) {
    let firstCard = input[0];
    let secondCard = input[1];
    let thirdCard = input[2];
    let lastCard = input[10];

    let cards = firstCard.push(secondCard).push(thirdCard)

    console.log(cards);

    let num1 = Number(input[3]);
    let num2 = Number(input[7]);

    let add1 = input[4];
    let insert1 = input[6];
    let remove1 = input[9];



}
solve(["Ace of Diamonds", "Queen of Hearts", "King of Clubs", 3, "Add", "King of Diamonds", "Insert", 2, "Jack of Spades", "Remove", "Ace of Diamonds"])
