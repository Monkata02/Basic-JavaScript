function sortNums(num1, num2, num3){
    let input = 0;
    let arr = [num1, num2, num3].sort((a,b) => b-a)
    let nums = Number(arr[input]);
    input++;
    for (i = 0; i < arr.length; i++){
    
    console.log(nums);
    nums =Number(arr[input]);
    input++;
    } 
    
}
