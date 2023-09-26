function facebook(input = []) {
    let object = {};
    let slicedInput = input.slice(0, input.indexOf('Log out'));

    for (const line of slicedInput) {
        let [action, username, count] = line.split(': ');

        switch (action) {
            case "New follower":
                if (!object.hasOwnProperty(username)) {
                    object[username] = { likes: 0, comments: 0 };
                }
                break;

            case "Like":
                if (!object.hasOwnProperty(username)) {
                    object[username] = { likes: +count, comments: 0 };
                } else {
                    object[username].likes += +count;
                }
                break;

            case "Comment":
                if (!object.hasOwnProperty(username)) {
                    object[username] = { likes: 0, comments: 1 };
                } else {
                    object[username].comments += 1;
                }
                break;

            case "Blocked":
                if (object.hasOwnProperty(username)) {
                    delete object[username];
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
        }
    }

    let arr = Object.entries(object);
    arr.forEach((name) => {
        name[1] = name[1].likes + name[1].comments;
    });

    console.log(`${arr.length} followers`);
    for (const line of arr) {
        console.log(`${line[0]}: ${line[1]}`);
    }
}
