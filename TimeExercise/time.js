var converter = require('number-to-words'); //A library to convert numbers to their word form
function convertTimeToWords(hours, minutes){
    if(hours < 1 || hours > 12){    //Error check hours
        console.log("You did not eneter a valid hour.  A valid hour is 1-12!");
        return;
    }
    if(minutes < 0 || minutes > 59){    //Error check minutes
        console.log("You did not enter a valid number of minutes.  A valid number of minutes is 0-59!");
        return;
    }
    var tempHour = hours;
    if(minutes > 30 && hours == 12){    //I don't want it to display thirteen instead of one
        tempHour = 0
    }
    //Switch to handle what to print
    switch(minutes){
        case 0: //Right on the hour
            console.log(converter.toWords(tempHour) + " o' clock");
            break;
        case 15:    //Quarter past the hour
            console.log("quarter past " + converter.toWords(tempHour));
            break;
        case 30:    //Half past the hour
            console.log("half past " + converter.toWords(tempHour));
            break;
        case 45:    //Quarter to the hour
            console.log("quarter to " + converter.toWords(tempHour + 1));
            break;
        default:
            //Switch can't handle operands in case statements, so I just put an if/else in the default
            if(minutes < 30 && minutes != 15 && minutes != 0){
                console.log(converter.toWords(minutes) + " minute(s) past " + converter.toWords(tempHour));
                break;
            }else{
                console.log(converter.toWords(60-minutes) + " minute(s) to " + converter.toWords(tempHour+1));
                break;
            }
    }       
    return;
}

convertTimeToWords(5, 47);
convertTimeToWords(3, 10);
convertTimeToWords(7, 29);
convertTimeToWords(5, 30);
convertTimeToWords(5, 45);
convertTimeToWords(4, 15);
convertTimeToWords(6, 35);
convertTimeToWords(3, 30);
convertTimeToWords(10, 57);
convertTimeToWords(1, 1);
convertTimeToWords(7, 15);
convertTimeToWords(12, 45);