alert('Bom dia')
diaDaSemana = prompt ('Qual dia da semana ?')

if (diaDaSemana == 'Sábado') {
    alert('Bom final de semana')
} else if (diaDaSemana == 'Domingo') { 
    alert('Bom final de semana')
} else {
    alert('boa semana')
}


numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

pontuacao = 105;
if (pontuacao >= 100){
    console.log('Parabens, voce venceu')
} else {
    console.log('Tente novemante para ganhar')
}

let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

nome = prompt('Qual seu nome ?')
alert(`Boas-vindas ${nome}`);