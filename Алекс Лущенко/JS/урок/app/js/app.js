

const one = document.querySelector('.one');

one.style.width = '150px';

one.style.paddingBottom = '40px';

console.log(one.style);

one.classList.add('two', 'three');
one.classList.remove('three');

const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
    this.classList.toggle('three');
}
 
console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'));

one.setAttribute('data-num', 6);

let gas = document.querySelectorAll('.gas');
 
    for (let i = 0; i < gas.length; i++) {
        gas[i].onclick = function () {
            let gallons = document.querySelector('.gallons').value;
            let amount = this.getAttribute('data');
            console.log(gallons * amount);
        }
    }


let a = document.createElement('div'); 
a.innerHTML = 'Yamen gehbedi';
a.classList.add('one');

document.querySelector('body').appendChild(a);
a.style.width = '300px';

console.log(a);

// Методы массивов

const ar1 = [1,2,3,4,5,6,7,8,9];

const ar2 = ['r','c','d','e','r','t','x','z','m'];

console.log(ar1.length);












