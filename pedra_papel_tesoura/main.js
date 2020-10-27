//Pedra, papel, tesoura
//Autor: Flavio Alencar

//Constantes Validas
const escolhasValidas = ["0", "1", "2"];

//Declaração da função
function transformaEscolhaEmItem(escolha){
	if (escolha === "0"){
		return "pedra";
	} else if (escolha === "1"){
		return "papel";
	} else if (escolha === "2"){
		return "tesoura";
	}
}

function escolhaValida(escolha){
	return (escolhasValidas.includes(escolha));
}

let vitorias = 0;
let derrotas = 0;
let empates = 0;

//Repetição
while (true){
	//escolha do usuario
	let escolha = prompt("Digite: \n0 para pedra \n1 para papel \n2 para tesoura");

	//Verificação da escolha do usuario
	if (escolhaValida(escolha)){
	} else{
		console.log ("Fim de jogo");
		break;
	}

	let itemEscolha = transformaEscolhaEmItem(escolha);
	console.log ("Você escolheu", itemEscolha);

	//Escolha do Adversario. Numeros aleatorios em 0, 1, 2
	let escolhaAdversario = Math.floor(Math.random() * 3) + "";
	let itemEscolhaAdversario = transformaEscolhaEmItem(escolhaAdversario);
	console.log ("O Adversario escolheu", itemEscolhaAdversario);

	//Logica para ver quem venceu
	if (itemEscolha === itemEscolhaAdversario){
		console.log ("Empate");
		empates ++;
	} else if (itemEscolha === "pedra"){
		if (itemEscolhaAdversario === "tesoura"){
			console.log ("Você venceu!");
			vitorias ++;
		}else {
			console.log ("Você perdeu.");
			derrotas ++;
		}
	} else if (itemEscolha === "papel"){
		if (itemEscolhaAdversario === "tesoura"){
			console.log ("Você perdeu.");
			derrotas ++;
		} else {
			console.log ("Você venceu!");
			vitorias ++;
		}
	} else if (itemEscolha === "tesoura"){
		if (itemEscolhaAdversario === "papel"){
			console.log ("Você venceu!");
			vitorias ++;
		} else {
			console.log ("Você perdeu.");
			derrotas ++;
		}
	}

	//Placar
	console.log ("Vitórias: ", vitorias);
	console.log ("Empates: ", empates);
	console.log ("Derrotas ", derrotas);
	console.log ("");

}