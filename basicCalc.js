function calculator(num, operator, num2) {

    if (operator === '+') {
        console.log((num + num2).toFixed(2));
    } else if (operator === '-') {
        console.log((num - num2).toFixed(2));  
    } else if (operator === '*') {
        console.log((num * num2).toFixed(2));  
    } else if (operator === '/') {
        console.log((num / num2).toFixed(2));  
    }
}
