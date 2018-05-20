function cadastrarFilme(){
	var nomeFilme = document.getElementById("nomeFilme").value;
	var duracao = document.getElementById("duracao").value;
	var html = "<tr>";
	html += "<td>" + nomeFilme + "</td>";
	html += "<td>" + duracao + "</td>";
	html += "<tr>";
	document.getElementById("listaDeFilmes").innerHTML += html;

	document.getElementById("nomeFilme").value = "";
	document.getElementById("duracao").value = "";
}