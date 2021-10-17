

// let a = 10;

// if (a > 9) {
//     console.log('Gooo');
// }

// let button = document.querySelector('.nov1');
// let input  = document.querySelector('.age');

// button.style.background = 'red'

// button.onclick = () => {
//     let num = +input.value;
//     if (num >= 16) {
//         console.log('Welcom');
//     } 
//         else {
//             console.log('Stop');
//         }

//         switch (num) {
//             case 15:
//                 console.log('Privet');
//                 break;
//             case 16:
//                 console.log('Goooo');
//                 break;
//         }
// }

// let b = 5;

// console.log(b > 3 && b <= 7);


// урок Работа с формами

// document.querySelector('.b-1').onclick = () => {
//     console.log(document.querySelector('.one').value);
// }


// document.querySelector('.one').oninput = () => {
//     console.log(document.querySelector('.one').value);
//     document.querySelector('span').innerHTML = document.querySelector('.one').value;
// }


// document.querySelector('.b-2').onclick = () => {
//     console.log(document.querySelector('#i2').value);
// }

   
for (let i = 0; i < 6; i++) {
    console.log(i);
}

let k = 0; 
while (k < 5) {
    k++

    console.log('k: ' + k);

}

let sum = 0;
let r = 0;
 while (r <= 10) {
    sum = sum + r
    r++

 }

let flag = 3;
let out = '';
let a = 0;

    while (a < 4) {

    let a1 = 0;

        while (a1 < 4) {
            if (a1 < flag) {
                out += '&nbsp';

            }
            else {

                out += '*';
            }
            a1++;
                
        }
        flag--;
        out += '<br>'
        a++
    }
    document.querySelector('.out').innerHTML = out;








