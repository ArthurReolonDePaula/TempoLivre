function cadastrarFilme(){
	var nomeFilme = document.getElementById("nomeFilme").value;
	var duracao = document.getElementById("duracao").value;
	var anoLancamento = document.getElementById("ano").value;
	var sinopse = document.getElementById("sinopse").value;
	var classificacao = document.getElementById("classificacao").value;
	var avaliacao = document.getElementById("avaliacao").value;

	var mensagem = "";

	if(nomeFilme == ""){
		mensagem += "Nome do filme\n"
	}

	if(duracao == ""){
		mensagem += "Duração\n"
	}

	if(anoLancamento == ""){
		mensagem += "Ano de Lançamento\n"
	}

	if(sinopse == ""){
		mensagem += "Sinopse\n"
	}

	if(classificacao == ""){
		mensagem += "Classificação Indicativa\n"
	}

	if(avaliacao == ""){
		mensagem += "Avaliação do Filme\n"
	}

	if(mensagem != ""){
		alert("Por favor preencha os campos abaixo: \n" + mensagem)
		return;
	}

	var html = "<tr id='idLinha-"+ duracao + "' style='opacity: 0.1'>";
	html += "<td>" + nomeFilme + "</td>";
	html += "<td>" + duracao + "</td>";
	html += "<td>" + anoLancamento + "</td>";
	html += "<td>" + sinopse + "</td>";
	html += "<td>" + classificacao + "</td>";
	html += "<td>" + avaliacao + "</td>";
	html += "<tr>";
	document.getElementById("listaDeFilmes").innerHTML += html;
	document.getElementById("nomeFilme").value = "";
	document.getElementById("duracao").value = "";
	document.getElementById("ano").value = "";
	document.getElementById("sinopse").value = "";
	document.getElementById("classificacao").value = "";
	document.getElementById("avaliacao").value = "";

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