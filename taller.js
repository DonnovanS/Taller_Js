let a = 50
let b = 70
let c = 15
let numero_menor;
let numero_mayor;

if (a > b) {
    numero_menor = b;
} else {
    numero_menor = a;
}

if (a > b && a > c) {
    numero_mayor = a;
} else if (b > a && b > c) {
    numero_mayor = b;
} else {
    numero_mayor = c
}
console.log(numero_menor);
console.log(numero_mayor)