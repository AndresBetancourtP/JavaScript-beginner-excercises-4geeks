let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests) {
    let precio = 0;
    var numero = parseInt(guests)

    if(numero <=50){ return precio = 4000 }
    else if (numero <=100){ return precio = 10000 }
    else if (numero <=200) { return precio = 15000}
    else {return precio = 20000}
    return precio;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
