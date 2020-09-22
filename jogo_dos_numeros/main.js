//Jogo de adivinhação
//Autor: Flavio Alencar

//Geração de numeros aleatórios ate o 'maximo'
let maximo = 30;
let numeroCorreto = Math.floor(Math.random() * maximo) + 1;

//Loop
let palpite;
let mensagem;
let maior = false;
let menor = false;
let primeiraTentativa = 0;
let numerosDigitados = [];

while (palpite != numeroCorreto){

	mensagem = "";

	if (primeiraTentativa == 0){
	mensagem += "Eu pensei em um número entre 1 e " + maximo + ".\nVocê concegue adivinhar qual número é esse?\n\n";
	primeiraTentativa = 1;
	}

	mensagem += "Digite um palpite ou clique em cancelar para sair.";

	if (maior){
		mensagem += "\n\nTente um numero menor..";
	}

	if (menor){
		mensagem += "\n\nTente um numero maior..";
	}

	mensagem += "\nNumeros digitados: " + numerosDigitados;
	
	palpite = prompt(mensagem);

	if (palpite == numeroCorreto){
		alert ("Você venceu!")

	} else if (palpite == 'sair' || palpite == null){
		alert ("Você encerrou o jogo.");
		break;

	} else if (Number(palpite) > numeroCorreto){
		maior = true;
		menor = false;

	} else if (Number(palpite) < numeroCorreto){
		menor = true;
		maior = false;		
	}

	numerosDigitados.push(palpite);
}