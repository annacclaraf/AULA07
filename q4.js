
let nt1=Number(prompt("Digite a primeira nota: "))
let nt2=Number(prompt("Digite a segunda nota: "))
let nt3=Number(prompt("Digite a terceira nota: "))

let pessoa1=Number(prompt("Digite o prim peso: "))
let pessoa2=Number(prompt("Digite o segnd peso: "))
let pessoa3=Number(prompt("Digite o trec peso: "))

let mp = (nt1*pessoa1 + nt2*pessoa2 + nt3*pessoa3)/(pessoa1+pessoa2+pessoa3)
console.log("O result é: " + mp)