console.log(`Trabalhando com listas ->`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`

// const listaDestinos = ['Salvador', 'São Paulo', 'Rio de Janeiro']

const destinos = new Array (
    'Salvador', 
    'São Paulo', 
    'Rio de Janeiro',
    'Curitiba',
    'Recife',
)

destinos.push('ilheus')

destinos.splice(1,1)

console.log(destinos);

console.log(destinos[3])