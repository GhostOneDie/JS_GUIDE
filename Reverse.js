let a = [2,5,22,88,965];
let b = [5,8,55,456,888];
// function r (a) {
// res = [];
// a.forEach(element => {
//     res.unshift(element);
// });
//     return res;
// }
// console.log(r(b));

function r2 (a) {
    res = [];
    for (let i = a.length - 1; i>= 0; i--) {
        res.push(a[i]);
    }
        return res;
    }
    console.log(r2);