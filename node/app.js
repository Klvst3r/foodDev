 //salmacenamos en una variable la funcionalidad de expressJS, atraves del cual estaremos respondiendo las peticiones del usuario
 //Con paginas web, conectandonos a la BD
 var express = require('express');

//este require va a requerir la funcionalidad de jade
// var jade = require('jade');

 var app = express();

//el engine de las vistas sera jade
 app.set("view engine", "jade");

//Indicamos a ExpresJS que recibiremos peticiones a traves de la URL, a partir de raiz o puro dominio por el metodo get
//Protocolo por medio del cuaal se counica internet, por el metodo get
//POST, GET 
//indicamos al navegador la aceptamos por el metodo get a esta url
//Para responder se utiliza una funcion, que se cumple el metodo se ejecuta la funcion, que responde a una peticion del usuario con dos parametros
// El request del usurio y la espuesta del usuario (solicitud, respuesta)
  app.get("/", function(req,res){
  
  	//objeto respuesta con el meodo end o send() manda informacion pero no termina la peticion al entregar respuesta
  	//Aunque en condiciones normales es end()
  	
  	//res.end("Hola mundo mundial");
  	res.render('index');
  });

//Le indicamos a traves de que puerto estara escuchando la aplicaicons
  app.listen(8081);
