console.log(`Trabalhando com condicionais ->`);

const destinos = new Array (
    'Salvador', 
    'São Paulo', 
    'Rio de Janeiro',
    'Curitiba',
    'Recife',
)

console.log(`\ndestinos possiveis: ${destinos}\n`)


const idadeComprador = 15;
const estaAcompanhada = true;
let passagemComprada;


//utilizando && (e)

if (idadeComprador < 18 && estaAcompanhada == false){
    console.log('Comprador menor de idade, não podemos vender');
    }else{
    console.log('passagem comprada!');
    passagemComprada = true;

    console.log('\n-----Embarque-----\n')
    if (idadeComprador >= 18 && passagemComprada){
        console.log('Boa viagem!! ')
    }else{
        console.log('não pode embarcar');
    }
}



// if(idadeComprador < 18){
//     estaAcompanhada = true;
//     if(estaAcompanhada){
//         destinos.splice(0,3)
//         console.log(`Comprador menor de idade com acompanhante, pode comprar: ${destinos}`);
//     }else{
//         console.log(`Comprador menor de idade, não podemos vender`)
//     }
// }else{
//     destinos.push('Argentina')
//     console.log(`Comprador maior de idade podemos vender: ${destinos}`)
// }


// utilizando || (ou)

// if (idadeComprador < 18 || estaAcompanhada == true){
//     console.log(`pode comprar: ${destinos}`);
// }else{
//     console.log('Comprador menor de idade, não podemos vender');
// }