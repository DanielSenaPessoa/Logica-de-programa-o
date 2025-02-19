//json

let invoice = {
    name: "Daniel",
    age: 24,
    products: {
        0: ["mouse 2xwm",29.90],
        1: ["teclado mecanico",150.00],
        2: ["monitor 24",800.00]
    }
};



generateInvoice(invoice);


function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade do comprador é ${invoice.age}`);

    console.log("====================================");

    for(let index in invoice.products){
        let [productsName, productsPrice] = invoice.products[index];
        console.log(`- ${productsName} - R$ ${productsPrice}`);
    }


}


