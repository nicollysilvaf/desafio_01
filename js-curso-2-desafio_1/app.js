let tituto = document.querySelector('h1');
tituto.innerHTML = 'Hora do desafio!'; 

function verificarClique() {
    console.log('O botão foi clicado!');
}

function enviarAlert() {
    alert ('O botão alert foi clicado.');
}

function perguntarCidade(){
    let nomeDaCidade = prompt ('Me fale o nome da sua cidade favorita no Brasil?');
    alert (`Estive em ${nomeDaCidade} e lembrei de você!`);
}

function pedirNumero() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}


