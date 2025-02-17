//exemplo operadores and &&
let idade = 30;
let vistoverificado = true;
resultadoVerificado = (idade >= 18) && (vistoverificado === true);
let moedasColetadas = 100;
let item = "estrela";
let resultado = (moedasColetadas >= 100) && (item === "estrela");

//---------------------------------------------------------------
//exemplo operadores or ||
let tempo = "Sol";
let itemsegurando = "Guarda-chuva";
let podesair = (tempo !== "chuva") || (itemsegurando === "Guarda-chuva");

console.log("Pode sair: " + (podesair === true ? "Sim" : "Não"));

//-----------------------------------------------------------------
//exemplo operadores not !
let temporal = "chuva";
let resultadotemporal = temporal === "chuva";
console.log("Resultado: " + resultadotemporal);

console.log(true && false);

//----------------------------------------------------------------
console.log("Valor padrão: " + idade);

idade = 30 + 6;

console.log("Valor incrementado: " + idade);

idade = 30 - 6;

console.log("Valor decrementado: " + idade);

console.log( resultadoVerificado );
console.log( resultado );