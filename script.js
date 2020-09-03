var init = () => {
//Lesson 6

const img = ['1','2','3'];
const small = document.querySelector('#small');
const big = document.querySelector('#big');
const path = '/img/small/';
const buttons = document.querySelectorAll('button');
let curImg = 0;

small.src = path + `${img[curImg]}.jpg`;
big.src = small.src.replace('small','big');

const changePic = (id) => {
    switch (id) {
        case 'prev':
            if (curImg == 0) {
                curImg = 2;
            } else {
                curImg -= 1;
            }
            break;
        case 'next':
                if (curImg == img.length - 1) {
                    curImg = 0;
                } else {
                    curImg += 1;
                }
            break;
    }
    small.src = path + `${img[curImg]}.jpg`;
    big.src = small.src.replace('small','big');
}

buttons.forEach(img => {
    img.addEventListener('click', function() {changePic(img.id)});
});








/*
//Lesson 5

const body = document.querySelector('body');
console.log(body)

const table = document.createElement('table');
const abc = [' ','A','B','C','D','E','F','J','H',' ']

const chess = {
    A8: '&#9820;',
    H1: '&#9820;',
    B8: '&#9816;',
    J1: '&#9816;',
    C8: '&#9821;',
    F1: '&#9821;',
    D8: '&#9813;',
    E1: '&#9813;',
    E8: '&#9818;',
    D1: '&#9818;',
    F8: '&#9815;',
    C1: '&#9815;',
    J8: '&#9822;',
    B1: '&#9822;',
    H8: '&#9814;',
    A1: '&#9814;',
}

for (let i = 9; i >= 0; i--) {
    let tr = document.createElement('tr');
    for(let j = 0; j < 10; j++) {
        let td = document.createElement('td');
        
        if ((!j || j == 9) && i && i != 9) {
            td.innerText = i;
        } else if (i == 9 || !i) {
            td.innerText = abc[j];
        }


        if ((i%2 && j%2 || j%2 == 0 && i%2 == 0) && i != 9 && j != 9 && j && i) {//!j%2 - не работает
            td.className = 'black white';
        }

        if (i == 9 || j == 9) {
            td.className = 'rotate';
        }
 
        if (i == 8 || i == 1) {
            const curBlock = abc[j]+i;

            if (chess.hasOwnProperty(curBlock)) {
                td.innerHTML = chess[curBlock];
            }
        }

        if ((i == 7 || i == 2) && j && j != 9) {
            td.innerHTML = '&#9823;';
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

body.append(table);
*/
/*
//Lesson 4
// №1
console.log('=============Задание 1=============')

var numObj = {};

function numToObj(num) {
    if (!num || !Number.isInteger(num) || num > 999) {
        console.log('Wrong argument');
        return numObj;
    }
    var numArray = num.toString().split('');

    switch(numArray.length) {
        case 3:
            numObj.hundreds = numArray[0];
        case 2:
            numObj.dozens = numArray[numArray.length - 2]
    }
    numObj.units = numArray[numArray.length - 1];//единицы есть всегда, для них проверка не нужна
    console.log(numObj);
}

numToObj(23);
*/
// //Lesson 3

// //№1 - не самое красивое решение, зато собственное
// console.log('=============Задание 1=============')

// var simpleNums = 2, n, modalCount;
// while (simpleNums <= 100) {
//     modalCount = 0;
//     n = 2;
//     while(n < 10) {
//         if (simpleNums % n++) {
//             modalCount++;
//         }
//     }
//     if (!(modalCount % 8) || simpleNums == 2 || simpleNums == 3 || simpleNums == 5 || simpleNums == 7){
//         console.log(simpleNums);
//     }
//     simpleNums++;
// }


// //№2-3
// console.log('=============Задание 2-3=============')

// var basket = [
//     {
//         item: 'Item 1',
//         price: 500,
//         count: 2,
//     },
//     {
//         item: 'Item 2',
//         price: 200,
//         count: 6,
//     },
//     {
//         item: 'Item 3',
//         price: 40,
//         count: 21,
//     },
//     {
//         item: 'Item 4',
//         price: 600,
//         count: 1,
//     }
// ]

// var total = 0;

// function countBasketPrice() {
//     basket.forEach(
//         function(value) {
//             console.log('Item: '+ value.item + ' - Price: '+ value.price + ' - Count: '+ value.count);
//             total += value.price * value.count;
//         }
//     )
//     console.log('Total: '+total);
// }

// countBasketPrice()

// //№4
// console.log('=============Задание 4=============')

// for (var i = 0; i <= 9; console.log(i++)) {

// }

// //№5
// console.log('=============Задание 5=============')
// for (var i = 1; i <= 20; i++) {
//     console.log('x'.repeat(i));
// }

// //Lesson 2 - заменил alert на console.log() - для удобства
// //Изменил названия некоторых переменных, что бы не путались с другим заданием

// //№1
// console.log('=============Задание 1=============')
// var a = 1, b = 1, c, d;
// c = ++a; console.log(c);           // 2 - Префиксный инкремент (сначала сложение, потом присвоение)
// d = b++; console.log(d);           // 1 - Постфиксный инкремент (сначала присвоение, потом сложение)
// c = (2+ ++a); console.log(c);      // 5 - Префиксный инкремент (сначала инкремент а (а из 1ой строки уже = 2), потом сложение в скобке) 
// d = (2+ b++); console.log(d);      // 4 - Постфиксный инкремент (сначала сложили 2 + 2 (b из 2 строки увеличен на 2), после b увеличили на 1)
// console.log(a);                    // 3 - Так как во 2 и 4 строках b увеличили на 1
// console.log(b);                    // 3 - Так как в 1 и 3 строках а увеличили на 1

// //№2
// console.log('=============Задание 2=============')
// var a2 = 2;
// var x2 = 1 + (a2 *= 2); // 5: x = 1 + (2 * 2)
// console.log(x2);

// //№3
// console.log('=============Задание 3=============')
// var a3 = 1, b3 = 2;

// function calc(a, b) {
//     if (a >= 0 && b >= 0) {
//         return a - b;
//     } else if (a < 0 && b < 0) {
//         return  a * b;
//     } else {
//         return a + b;
//     }
// }

// console.log(calc(a3, b3)); //вызываем функцию и выводим в консоль

// //№4
// console.log('=============Задание 4 (рекурсия)=============')
// var b4 = 9;

// function showAllReqursive(a) {
//     if (a < 0) {
//         console.log('Value is not between 0 and 15')
//         return;
//     }

//     if (a > 15) {
//         return;
//     }
//     console.log(a);
//     return showAllReqursive(++a);
// }
// showAllReqursive(b4);

// console.log('=============Задание 4 (switch)=============')
// var a4 = 4;

// function showAll(a) {
//     switch (a) {
//         case 0:
//             console.log(0);  
//         case 1:
//             console.log(1);
//         case 2:
//             console.log(2);
//         case 3:
//             console.log(3);
//         case 4:
//             console.log(4);
//         case 5:
//             console.log(5);  
//         case 6:
//             console.log(6);
//         case 7:
//             console.log(7);
//         case 8:
//             console.log(8);
//         case 9:
//             console.log(9);
//         case 10:
//             console.log(10);
//         case 11:
//             console.log(11);  
//         case 12:
//             console.log(12);
//         case 13:
//             console.log(13);
//         case 14:
//             console.log(14);
//         case 15:
//             console.log(15);
//             break;
//         default:
//             console.log('Value is not between 0 and 15')       
//     }
//     return;
// }
// showAll(a4);

// //№5
// function sum(a, b) {
//     return a + b;
// }

// function dif(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// //№6
// console.log('=============Задание 6=============')
// function action(a, b, operation) {
//     switch (operation) {
//         case 'sum':
//             return sum(a, b);
//         case 'dif':
//             return dif(a, b);
//         case 'mul':
//             return mul(a, b);
//         case 'div':
//             return div(a, b);
//         default: 
//             return 'Wrong operation';
//     }
// }
// console.log(action(8, 4, 'mul'))

// //№7
// console.log('=============Задание 7=============')
// console.log(null < 0);
// console.log(null > 0);
// console.log(null <= 0);//Интересно себя ведет сравнение вот тут
// console.log(null >= 0);//Интересно себя ведет сравнение вот тут
// console.log(null == 0);
// console.log(null === 0);
// //Суть различий в том, что null - это отдельный специальный тип в JS, при этом воспринимающийся как объект, а 0 - число


// //№8
// console.log('=============Задание 8=============')

// var a8 = 2, b8 = 3;

// function power(val, pow) {
//     if (pow == 1) {
//         return val;
//     } else {
//         return val * power(val, pow - 1);
//     }
// }
// console.log(power(a8, b8));

//Lesson 1
/*
    //1.Tempreature

    var celcius = 12;
    var farenheit = (9/5)*celcius+32;
    alert('12 градусов по цельсию = '+farenheit+' градусов по фаренгейту');

    //2.Variables
    var admin = 'Василий';
    var name;
    name = admin;
    alert(name);

    //3.Concatenation
    alert('1000 + "108" = 1000108');

    //4.Variables_additional_homework
    var a = 10;
    var b = 20;
    a += b;
    b = a - b;
    a -= b;

    alert(a+' & '+b);
*/

}


document.addEventListener('DOMContentLoaded',init);