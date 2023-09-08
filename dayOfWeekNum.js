function weekDay(input) {

    num = 0;
    
    switch(input) {
        case 'Monday': num = 1;break;
        case 'Tuesday': num = 2;break;
        case 'Wednesday': num = 3;break;
        case 'Thursday': num = 4;break;
        case 'Friday': num = 5;break;
        case 'Saturday': num = 6;break;
        case 'Sunday': num = 7;break;
        
    }

    if (num > 0) {
        console.log(num);
    } else {
        console.log('error');
    }
}
