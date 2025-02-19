class formaDeBolo {
    constructor(saborDaMassa,saborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    assar(){
        console.log("Assando o bolo" + this.saborDaMassa);
    }



}

let boloFesta = new formaDeBolo("massa de chocolate","recheio de morango");

let boloPremium = new formaDeBolo("massa de baunilha","recheio de coco");


console.log("====================================");
boloFesta.escrever();
boloFesta.assar();
console.log("====================================");
boloPremium.escrever();
boloPremium.assar();
console.log("====================================");