'use strict'
//--------------------------------------------------------------Task #1
let user = {
    name: 'John',
    surname: 'Smith'
};
user.name = 'Pete'
delete(user.name);
console.log(user);

//--------------------------------------------------------------Task #2
// const user = {

//     name: 'John'

// };
// console.log(user.name); //John

// user.name = 'Pete';

// console.log(user.name); //Pete
// // это будет работать?
// //--------------------Да-----------------

//-------------------------------------------------------------------------------------------------------

//Task #3
// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary
//     }
//     return sum;

// };
// let salaries = {

//     John: 100,

//     Ann: 160,

//     Pete: 130

// };
// alert(sumSalaries(salaries));
//РАБОТАЕТ ОСТАВЛЯЮ ДЛЯ СЕБЯ, ЧТОБЫ ПОТОМ РАЗОБРАТЬ
//------------------------------------------------------------Task #3
let salaries = {

    John: 100,

    Ann: 160,

    Pete: 130

};
const sum = 'сумма ' + (salaries.John + salaries.Ann + salaries.Pete);
console.log(sum);