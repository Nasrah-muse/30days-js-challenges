
//  Checking if given year is leap year

function checkingLeapYear(year){
     
    if(year % 4 === 0){
        if(year  % 100 === 0){
            if(year % 400 === 0){
                console.log(`This year( ${year}) is a leap year`)
            }else{
                console.log(`This year (${year}) is not a leap year`)
            }
        }
        else{
            console.log(`This year (${year}) is a leap year`)
        }   
    }
    else{
        console.log(`This year (${year}) is not a leap year`)
    }
}

checkingLeapYear(2022);
checkingLeapYear(2016);
checkingLeapYear(1991);
checkingLeapYear(2002);
checkingLeapYear(2024);