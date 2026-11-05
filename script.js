// task 1

let list;
const thing = 'Koffee';

switch (thing) {
    case 'Koffee':
        list = 'Koffee';
        break;
    
    case 'Tee':
        list = 'Tee';
        break;
    
    case 'Juce':
        list = 'Juce';
        break;
    
    default:
        console.log('You did something wrong!');
}
console.log(list);

// task 2
// let artOfDay;
// const day = prompt('write some of days: ');

// switch (day) {
//     case 'Monday':
//         artOfDay = 'work_day';
//         break;

//     case 'Thuesday':
//         artOfDay = 'work_day';
//         break;

//     case 'Wednesday':
//         artOfDay = 'work_day';
//         break;

//     case 'Tuersday':
//         artOfDay = 'work_day';
//         break;

//     case 'Friday':
//         artOfDay = 'work_day';
//         break;

//     case 'Saturday':
//         artOfDay = 'weekend';
//         break;

//     case 'Sunday':
//         artOfDay = 'weekend';
//         break;
//     default:
//         console.log('you did something wrong');
// }
// alert(artOfDay);

// task 3

// let season;
// const month = Number(prompt('input the number of month: '));

// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         season = 'winter';
//         break;

//     case 3:
//     case 4:
//     case 5:
//         season = 'frühling';
//         break;

//     case 6:
//     case 7:
//     case 8:
//         season = 'summer';
//         break;

//     case 9:
//     case 10:
//     case 11:
//         season = 'autumn';
//         break;

//     default:
//         alert('Неправильний номер місяця!');
// }

// alert(season);

// task 4

// let warning;
// const color = prompt('red, yellow or green?: ');

// switch(color) {
//     case 'red':
//         warning = 'stop!';
//         break;

//     case 'yellow':
//         warning = 'wait!';
//         break;

//     case 'green':
//         warning = 'go!';
//         break;
//     default:
//         console.log('something is wrong');
// }
// alert(warning);

// task 5

let num1 = 10;
let num2 = 2;
let operator = '/';

let resultat;

switch(operator) {
    case '+':
        resultat = num1 + num2;
        break;
    case '-':
        resultat = num1 - num2;
        break;
    case '*':
        resultat = num1 * num2;
        break;
    case '/':
        if(num2 === 0){
            console.log('You cant delit na null!');
        } else {
            resultat = num1 / num2;
        }
        break;
    default:
        console.log('Wrong operator');
}
console.log(resultat);