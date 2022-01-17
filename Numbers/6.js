// Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

const cp = prompt("Cost Price: ");
const sp = prompt("Selling Price: ");

if(cp > sp) {
    const diff = cp-sp;
    console.log(`${diff} loss`)
}

else if (sp > cp) {
    const diff = sp-cp;
    console.log(`${diff} profit`)
}

else if (cp === sp) {
    console.log("no profit no loss")
}