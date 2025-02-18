torrar("pão de forma","joão", 5.00);
torrar("pão integral","maria", 6.00);

function torrar(pao, nome = "cliente", valor ){
    console.log("torrando feita com " + pao);
    console.log("ela é um pedido de " + nome);
    console.log("o valor é de " + valor);
    injetarPao();
}

function injetarPao(){
    console.log("preparando para injetar o pão");
    console.log("Finalizado");
}
console.log("====================================");

let resultado = soma(10, 20);

function soma(numA, numB){
    let somatorio = numA + numB;
    return somatorio;
}

console.log(resultado);

console.log("====================================");

let userName = getFirstName("João da Silva", " ");

function getFirstName(name, splitchar){
    let firstName = name.split(splitchar)[0];
    return firstName;
}

console.log("Seja bem vindo " + userName);