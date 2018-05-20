function cadastrarFilme(){
	var nomeFilme = document.getElementById("nomeFilme").value;
	var duracao = document.getElementById("duracao").value;

	var mensagem = "";

	if(nomeFilme == ""){
		mensagem += "Nome do filme\n"
	}

	if(duracao == ""){
		mensagem += "Duração\n"
	}

	if(mensagem != ""){
		alert("Por favor preencha os campos abaixo: \n" + mensagem)
		return;
	}

	var html = "<tr id='idLinha-"+ duracao + "' style='opacity: 0.1'>";
	html += "<td>" + nomeFilme + "</td>";
	html += "<td>" + duracao + "</td>";
	html += "<tr>";
	document.getElementById("listaDeFilmes").innerHTML += html;
	document.getElementById("nomeFilme").value = "";
	document.getElementById("duracao").value = "";

	document.getElementById("formCadastro").style = "display: none;";
	document.getElementById("botaoAdicionaOutro").style = "display: block;";

	var contador = 0;
	var interval = setInterval(function(){
		document.getElementById("idLinha-" + duracao).style="opacity:0." + contador
			contador += 1;
		if(contador > 9){
			clearInterval(interval);
		}
	}, 50)
}

function mostrarFormulario(){
	document.getElementById("formCadastro").style = "display: block;";
	document.getElementById("botaoAdicionaOutro").style = "display: none;";
}