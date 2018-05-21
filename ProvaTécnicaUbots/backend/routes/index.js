var express = require('express');
var router = express.Router();
var filmes = [];

router.get('/', function(request, response, next){
  response.render('index', {title: 'ProvaPratica||Ubots', filmes: filmes});
});

router.post('/cadastrar-filme', function(request, response, next){

  var nome = request.body.nomeDoFilme;

  hash = {
    nomeDoFilme: request.body.nomeDoFilme,
    duracaoDoFilme: request.body.duracaoDoFilme,
    anoLancamento: request.body.anoLancamento,
    sinopseDoFilme: request.body.sinopseDoFilme,
    classificacaoDoFilme: request.body.classificacaoDoFilme,
    avaliacaoDoFilme: request.body.avaliacaoDoFilme
  }

  filmes.push(hash);

  var fs = require('fs');
  fs.writeFile("c:/tmp/bancoArquivo.js", filmes, function(err){
    if(err){
      console.log(err);
    }

    console.log("The file was saved");
  });

  response.render('index', { title: 'Cadastrar Filme', filmes: filmes});
});

module.exports = router;