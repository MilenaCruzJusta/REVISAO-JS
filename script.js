/*Exercicio 1
const nomeDoProduto = prompt("Insira o nome de um produto")
let precoDoProduto = Number(prompt("Diga o preço do produto"))
let valorDoProduto = precoDoProduto - 1
console.log(`O preço do produto ${nomeDoProduto} é igual a ${valorDoProduto} reais.`)

Exercicio2
let num1 = Number(prompt("Insira aqui seu primeiro número"))
let num2 = Number(prompt("Insira aqui seu segundo número"))
console.log(`Soma:`, num1+num2);
console.log(`Subtração:`, num1-num2);
console.log(`Multiplicação:`, num1*num2);
console.log(`Divisão:`, num1/num2);
console.log(`Resto da divisão:`, num1%num2);

Exercicio 3

let numeroDaSorte = Number(Math.floor(Math.random() * 10 + 1))
let numeroDoUsuario = Number(prompt("Insira aqui um número de 1 a 10"))

console.log(`O número sorteado foi: ${numeroDaSorte}`)

if (numeroDoUsuario < numeroDaSorte){
console.log("Seu número é menor que o número da Sorte!"); 
} else if (numeroDoUsuario > numeroDaSorte){
console.log("Seu número é maior que o número da Sorte!");
} else {(numeroDaSorte === numeroDoUsuario);
console.log ("Seu número é igual ao Número da Sorte!Parabéns!")
} 

Exercicio 4

alert("Seja bem vindo(a)! Para sua segurança, responda:")
let idadeUsuario = Number(prompt("Qual a sua idade?"))
let alturaUsuario = Number(prompt("Digite sua altura em centímetros"))
let coraçãoUsuario = prompt("Você tem algum problema cardíaco? Digite S/N")
    if(idadeUsuario >= 18 && alturaUsuario >= 160 && coraçãoUsuario === "N"){
    console.log("Radical! Pode entrar.");
    } else {
    console.log ("Ops, você não pode entrar, continue se divertindo em outro brinquedo.")
    }

    Exercicio 5

    let frase = "Hoje eu vou comer cenoura, ebaaaa!";

console.log(frase, `Essa é uma frase com ${frase.length} caracteres.`);
console.log(`Retirando os espaços do início e do fim: '${frase.trim()}' ainda tem ${frase.length} letras.`);
console.log(`Minúscula fica assim: '${frase.toLowerCase()}'`);
console.log("Tem a palavra comer?")
console.log(frase.includes("comer")); 
console.log("Tem a palavra batata?")
console.log(frase.includes("batata")); 

const fraseComBatata = frase.replaceAll("cenoura","batata")
console.log(`Nós podemos mudar e dizer: '${fraseComBatata}'`)
console.log("E agora, tem a palavra comer?")
console.log(fraseComBatata.includes("comer")); 
console.log("E agora, tem a palavra batata?")
console.log(fraseComBatata.includes("batata"));

Exercicio 6

const lista = ["batata","cenoura","beterraba"]
console.log(lista)
console.log(`O segundo nome da lista é ${lista[1]}`)
console.log(`O tamanho da lista é ${lista.length}`)
lista.push("mandioca")
console.log(`Adicionando mandioca, o tamanho da lista agora é ${lista.length}`)
console.log(lista)
console.log("Tem cenoura?")
console.log(lista.includes("cenoura"))
lista.splice(1,1)
console.log(`Removendo item do índice 1: ${lista}`)

Exercicio 7
const array = [4,32,56,9,12]

function divitens (arrayDeNumeros){
const primeiro = arrayDeNumeros[0] / 2
const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

arrayDeNumeros[0] = primeiro
arrayDeNumeros[arrayDeNumeros.length-1] = ultimo

return arrayDeNumeros
}

console.log(divitens(array))

let divitens2 = function(arrayDeNumeros){
    const primeiro = arrayDeNumeros[0] / 2
    const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

    primeiroItem = arrayDeNumeros[0]
    ultimoItem = arrayDeNumeros[arrayDeNumeros.length-1]
    
return arrayDeNumeros
}
console.log(divitens2(array))

let divitens3 = (arrayDeNumeros)=>{
    const primeiro = arrayDeNumeros[0] / 2
    const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

    primeiroItem = arrayDeNumeros[0]
    ultimoItem = arrayDeNumeros[arrayDeNumeros.length-1]  
    
    return arrayDeNumeros
}
console.log(divitens3(array))

Exercicio 8
const iniciante = {
    nome: "Milena Cruz Justa",
    idade: 36,
    generoMusicalPreferido: "rocknroll"
}

console.log(`O nome da pessoa é ${iniciante.nome}, ela tem ${iniciante.idade}, anos e gosta muito de ${iniciante.generoMusicalPreferido}.`)

const iniciante2 = {
    ... iniciante,
    nome: "Michelle Teixeira Alves",
    idade: 36,
    generoMusicalPreferido: "rocknroll"
}

console.log(`O nome da pessoa é ${iniciante2.nome}, ela tem ${iniciante2.idade}, anos e gosta muito de ${iniciante2.generoMusicalPreferido}.`)

Exercicio 9
let numeroUsuario = prompt("Digite aqui um número qualquer")

if(numeroUsuario % 2 === 0){
    console.log("É par")
}else{
    console.log("É impar")
}

Exercicio 10
let bichinho = prompt("Digite aqui o nome de um bichinho".toLowerCase())
switch (bichinho){
    case 'cachorro':
        console.log("Au au")
        break
    case 'gato':
        console.log("Miau")
        break
    case 'vaca':
        console.log("Muuu")
        break
    defalt:        
    console.log("sem barulho reconhecido :(")
    break
}

let animal = prompt("Digite aqui o nome de um bichinho".toLowerCase())

if(animal === "cachorro"){
console.log("Au au")

}if(animal === "gato"){
console.log("Miau")

}if(animal === "vaca"){
console.log("Muuu")            
} else {
console.log("sem barulho reconhecido :(")
}

Exercicio 11*/
