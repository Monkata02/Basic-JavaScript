function login(input) {
    for (let index = 1; index < input.length; index++) {
        if (input[0].split("").reverse().join('') === input[index]) {
            console.log(`User ${input[0]} logged in.`);
        } else {
            if (index === input.length - 1) {
                console.log(`User ${input[0]} blocked`);
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }
    }
}
login(["Acer", "login", "go", "let me in", "recA"]);
