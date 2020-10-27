//Cria elemento H1
let titulo  = document.createElement("h1");

//Texto visivel na tela
titulo.innerHTML = "Lista de Atividades";

//Adiciona classe ao titulo
titulo.classList.add("text-center");

//Adiciona o titulo ao body do HTML
document.body.appendChild(titulo);

//Criar elemento div
let div = document.createElement("div");
document.body.appendChild(div);

let subtitulo = document.createElement("h3");
subtitulo.innerHTML = "Atividades: "
div.appendChild(subtitulo);

let camposDeEntrada = document.createElement("form");
div.className = "container";
div.appendChild(camposDeEntrada);

let input = document.createElement("input");
input.placeholder = "Digite a atividade";
camposDeEntrada.appendChild(input);

let botao = document.createElement("button");
botao.innerHTML = "Adicionar";
camposDeEntrada.appendChild(botao);
botao.className = "btn btn-info";
botao.addEventListener("click", function(evt){
	evt.preventDefault();
	//Adiciona a lista de atividade
	if (input.value != ""){
		adicionarAtividade(input.value);}

	//Limpa o input
	input.value = "";
})

let lista = document.createElement("ul");
div.appendChild(lista);

//Array de atividades
let listaDeAtividades = [
	"Aprender um novo idioma",
	"Limpar a casa",
	"Atividade 3",
	"Atividade 4",
	"Atividade 5",
	"Atividade 6",
];

function adicionarAtividade(atividade){
	let li = document.createElement("li");
	li.innerHTML = atividade;
	lista.appendChild(li);
	let flag = false;

	//Evento listener, aguardando um click para executar uma ação	
	li.addEventListener("click", function(){
		if (flag){
			li.classList.add("text-muted");
			li.style = "text-decoration: line-through";}

		else{
			li.style = "text-decoration: ";
			li.classList.remove("text-muted");}
		flag=!flag;
	})	
}

for (let i = 0; i < listaDeAtividades.length; i++) {
	adicionarAtividade(listaDeAtividades[i]);
	
}
