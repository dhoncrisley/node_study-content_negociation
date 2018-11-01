var http = require('http');


//Objeto de request
var opcoes = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    method: 'post',//define o método
    headers:{
        'Accept': 'application/json',// pede que o retorno seja um application/json(JSON)
        'Content-type': 'application/json'
    }
}
//content-type
var html = 'nome=josé'; //x-www-form-urlencoded
var json = {
    nome: 'josé'
};
var string_json = JSON.stringify(json);
//método em request (NECESSITA ATRIBUIR À UMA VARIÁVEL)
var req = http.request(opcoes, function(res){
    res.on('data', function(chunk){

        console.log(chunk.toString());

    });
    res.on('end', function(){
    });

});

//escreve o body na request
req.write(string_json);

/* a atribuição da request à uma variável é necessário pois ao 
terminar a configuração da mesma é necessário envia-la com o método .end(); */
req.end()

//método em get
/* http.get(opcoes, function(res){
    res.on('data', function(chunk){

        console.log(chunk.toString());

    });
    res.on('end', function(){
    });

}); */