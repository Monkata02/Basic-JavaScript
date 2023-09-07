function oddNumsAndSum(N) {
    return Array.from({ length: N * 2 }, (i, n) => n + 1).filter(el => el % 2 != 0).join('\n') + `\nSum: ${N * N}`;
}

/ This code generates a list of odd numbers from 1 to 2 times "N," formats them as a string with each number on a new line, and appends the sum of "N" squared to the end of the string. /
