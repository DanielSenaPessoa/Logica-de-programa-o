//condicional if
let ehligado = true;
let possuiOvos= false;
let itensComprados = "";

if (ehligado) {
  console.log("O dispositivo está ligado");
}

if(possuiOvos){
  itensComprados = "leite"
}
//condição else
else{
  console.log("passou na sessão de congelados");
  itensComprados = "lasanha";
}

console.log("itens comprados: " + itensComprados);

//condição else if
let nivelDeFome =  1;

if(nivelDeFome === 1){
  console.log("Estou com muita fome");
}
else if(nivelDeFome === 2){
  console.log("Estou fome");
}
else {
  console.log("Estou satisfeito");
}

//switch case
let fruta = "banana";

switch(fruta){ 
  case "laranja":
    console.log("suco de laranja");
    break;
  case "banana":
  case "morango":
    console.log("vitamina de banana");
    break;
  case "maça":
    console.log("suco de maça");
    break;

  default:
    console.log("Não temos essa fruta");
  }