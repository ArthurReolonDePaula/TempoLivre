function cadastrarFilme(){
	var nomeFilme = $("#nomeFilme").val();
	var duracao = $("#duracao").val();
	var anoLancamento = $("#ano").val();
	var sinopse = $("#sinopse").val();
	var classificacao = $("#classificacao").val();
	var avaliacao = $("#avaliacao").val();

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
		return false;
	}
	return true;
}
