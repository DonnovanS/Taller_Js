let num_menor;
let num_mayor;
let x = 50;
let y = 70;
let z = 15;

if (x > y) {
    num_menor = y;
} else {
    num_menor = x;
}

if (x > y && x > z) {
    num_mayor = x;
} else if (y > x && y > z) {
    num_mayor = y;
} else {
    num_mayor = z;
}
console.log(num_menor);
console.log(num_mayor)