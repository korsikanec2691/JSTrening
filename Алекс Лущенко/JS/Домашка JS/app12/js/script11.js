

let a = [4,5,6,];
let b = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(b);
// for (let i = 0; i < b.length; i++) {

//     // console.log(b[i]);
//     let c = b[i];
//     for (let k = c.length; k >= 0; k--) {

//         console.log(c[k]);
//     }


// }

for (let i = 0; i < b.length; i++) {
    for (let k = 0; k < b[i].length; k++) {
        console.log(b[i][k])
    }
}







