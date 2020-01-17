'use strict';
let total = 0;
while (true) {
let input = prompt('Введите число:')
if (input === null) {break;}
else{input = Number(input)
if(Number.isNaN(input))
{alert('Введено не число!');}
else {total+=input
console.log(total)}}}
let message = `Общая сумма чисел равна ${total}`
alert(message)
