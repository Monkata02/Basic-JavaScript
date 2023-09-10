function organizePianoPieces(input) {
    let n = Number(input.shift());
    let pieces = {};

    // add initial pieces to the collection
    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input[i].split("|");
        pieces[piece] = { composer, key };
    }

    // process commands
    for (let i = n; i < input.length; i++) {
        let [command, ...args] = input[i].split("|");

        switch (command) {
            case "Add":
                let [piece, composer, key] = args;
                if (pieces[piece]) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    pieces[piece] = { composer, key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;

            case "Remove":
                let pieceToRemove = args[0];
                if (pieces[pieceToRemove]) {
                    delete pieces[pieceToRemove];
                    console.log(`Successfully removed ${pieceToRemove}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToRemove} does not exist in the collection.`);
                }
                break;

            case "ChangeKey":
                let [pieceToChange, newKey] = args;
                if (pieces[pieceToChange]) {
                    pieces[pieceToChange].key = newKey;
                    console.log(`Changed the key of ${pieceToChange} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${pieceToChange} does not exist in the collection.`);
                }
                break;

            case "Stop":
                // print remaining pieces
                for (let piece in pieces) {
                    console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
                }
                return;

            default:
                console.log(`Invalid command: ${command}`);
                return;
        }
    }
}
