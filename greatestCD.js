function solve(num1, num2) {

    let divisor;

    while (num1!=num2) {
        if (num1>num2) {
            num1 = num1 - num2;
        } else {
            num2 = num2 - num1;
        }
    }
    divisor = num1;

    console.log(divisor);
 
}
/* Greatest Common Divisor – GCD */
