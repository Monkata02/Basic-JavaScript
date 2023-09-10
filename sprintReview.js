function sprintReview(arr) {
    const [numOfTasks, ...initialState] = arr;
    const board = {};

    // Populate initial state
    for (let i = 0; i < numOfTasks; i++) {
        const [assignee, taskId, title, status, points] = initialState[i].split(':');
        if (!board[assignee]) {
            board[assignee] = [];
        }
        board[assignee].push({ taskId, title, status, points: Number(points) });
    }

    // Execute commands
    for (let i = numOfTasks; i < arr.length; i++) {
        const [command, ...args] = arr[i].split(':');
        const [assignee, taskId, newStatus] = args;
        const index = Number(args[1]);

        if (command === 'Add New') {
            const [, newAssignee, newTaskId, newTitle, newStatus, newPoints] = arr[i].split(':');
            if (!board[newAssignee]) {
                console.log(`Assignee ${newAssignee} does not exist on the board!`);
                continue;
            }
            board[newAssignee].push({ taskId: newTaskId, title: newTitle, status: newStatus, points: Number(newPoints) });
        } else if (command === 'Change Status') {
            if (!board[assignee]) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }
            const task = board[assignee].find(task => task.taskId === taskId);
            if (!task) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                continue;
            }
            task.status = newStatus;
        } else if (command === 'Remove Task') {
            if (!board[assignee]) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }
            if (index < 0 || index >= board[assignee].length) {
                console.log('Index is out of range!');
                continue;
            }
            board[assignee].splice(index, 1);
        }
    }

    // Calculate total points and print results
    let todoPoints = 0;
    let inProgressPoints = 0;
    let codeReviewPoints = 0;
    let donePoints = 0;

    for (const assignee in board) {
        for (const task of board[assignee]) {
            switch (task.status) {
                case 'ToDo':
                    todoPoints += task.points;
                    break;
                case 'In Progress':
                    inProgressPoints += task.points;
                    break;
                case 'Code Review':
                    codeReviewPoints += task.points;
                    break;
                case 'Done':
                    donePoints += task.points;
                    break;
                default:
                    break;
            }
        }
    }

    console.log(`ToDo: ${todoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${codeReviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    if (donePoints >= (todoPoints + inProgressPoints + codeReviewPoints)) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }
}
