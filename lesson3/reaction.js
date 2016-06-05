'use strict';
var number = prompt("Сколько щенков?");
if (number){
    alert(howManyAnimals(number))
}

function howManyAnimals(number){
    var reaction = ["Чего так мало?", "Более чем достаточно", "Почему их так много?", "Ого, 101 далматинец!"];
    var respond = [];
    if (number <= 10 && number != 0 && number > 0){
        respond.push(reaction[0]);
    }else if (number <= 50 && number != 0 && number > 0){
        respond.push(reaction[1]);
    }else if (number <= 100 && number != 0 && number > 0){
        respond.push(reaction[2]);
    }else if (number == 101 && number != 0 && number > 0){
        respond.push(reaction[2]+" "+reaction[3]);
    }

    // switch (number){
    //     case (number <= 10 && number != 0 && number > 0):
    //         respond.push(reaction[0]);
    //         break;
    //     case (number <= 50 && number != 0 && number > 0):
    //         respond.push(reaction[1]);
    //         break;
    //     case (number <= 100 && number != 0 && number > 0):
    //         respond.push(reaction[2]);
    //         break;
    //     case (number == 101 && number != 0 && number > 0):
    //         respond.push(reaction[2]+reaction[3]);
    //         break;
    //     default:
    //         break;
    // }
    return respond;
}

// alert(howManyAnimals(101));