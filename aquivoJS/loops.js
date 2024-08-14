console.log(`Trabalhando com LOOPS ->`);

const  listaDestinos = new Array (
    'Salvador', 
    'São Paulo', 
    'Rio de Janeiro',
    'Curitiba',
    'Recife',
)

const idadeComprador = 19;
let estaAcompanhada = false;
let passagemComprada = false;
const destino = 'Salvador'

console.log(`\ndestinos possiveis: ${listaDestinos}\n`)

const podeComprar = idadeComprador>= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;


while (contador < listaDestinos.length){
    if (listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1
}

console.log('Destino existe: ', destinoExiste)

if (podeComprar && destinoExiste){
    console.log(`boa viagem para ${destino}`)
}else{
    console.log('desculpe tivemos um erro!');
    
}