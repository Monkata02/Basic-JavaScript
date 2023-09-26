function wizards(input) {
    let text = input.shift();

    let currentCommand = input.shift();
    while (currentCommand !== "Abracadabra") {
        let [command, p1, p2] = currentCommand.split(' ');
        if (command === "Abjuration") {
            tempMessage = text.toUpperCase();
            text = tempMessage;
            console.log(text);
        } else if (command === "Necromancy"){
            tempMessage = text.toLowerCase();
            text = tempMessage;
            console.log(text);
        } else if (command === "Illusion"){
            let index = +p1
            text = text.split('');
            if (index >= 0 && index < text.length) {
                text[index] = p2;
                console.log('Done!');
            } else {
                console.log('The spell was too weak.');
            }
            text = text.join('');

        }else if (command === "Divination"){
            let firstString = p1;
            let secondString = p2;
            if (text.includes(firstString)) {
                text = text.split(firstString).join(secondString);
                console.log(text);
            }

        }else if (command === "Alteration"){
            let substring = p1;
            if (text.includes(substring)) {
                let left = text.slice(0, text.indexOf(substring))
                let right = text.slice(text.indexOf(substring)+ substring.length)
                text = left + right;
                console.log(text);
            }

        } else{
            console.log("The spell did not work!");
        }
        currentCommand = input.shift();
    }
}
wizards(["TR1GG3R", "Necromancy", "Illusion 8 m", "Illiusion 9 n", "Abracadabra"])   