let teste = {
    a: 1
}

let teste2 = {
    a: 1
}

console.log(Object.is(teste, teste2))
console.log("---")
console.log(Object.is(NaN, NaN))
console.log(NaN === NaN)
console.log("---")
console.log(Object.is(+0, -0));
console.log(+0 === -0)