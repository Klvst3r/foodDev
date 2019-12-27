var express = require('express');

var mongoose = require("mongoose");

var bodyParser = require("body-parser");

var multer = require("multer");

var cloudinary = require("cloudinary");




//Archivo de configuracion co el cloudname
cloudinary.config({
	cloudname: 	"klvst3r",
	api_key: 	"779745921757747",
	api_secret: "-9XkqwiDknfqbmEiOnyMmSq-_mA" 
});

var app = express();

mongoose.connect("mongodb://localhost/primera_pagina");

//indicamos que modulos de node se utilizan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(multer({dest: "./uploads" }));


//Schema de productos
var productSchema = {
	title:String,
	description: String,
	imageURL: String,
	pricing: Number
};

//Modelo
var Product = mongoose.model("Product", productSchema);

app.set("view engine", "jade");

app.use(express.static("public"))

app.get("/", function(req,res){
  
	/*var data = {
		title: "Mi primer super producto",
		description: "Una mega super hiper compra",
		imageURL: "data.png",
		pricing: 10
	}

	var product = new Product(data);

	product.save(function(err){
		console.log(product);
	});*/

	res.render('index');
});

app.post("/menu", function(req, res){
	//console.log(req.bodyParser);
	
	if(req.body.password == "123"){

		var data = {
			title: req.body.title,
	  	  	description: req.body.description,
			pricing: req.body.pricing,  
			pass: req.body.pass 
		}

		var product = new Product(data);

		//Console Data
		console.log(req.files);

		product.save(function(err){
			console.log(product);
			res.render('menu/new');
		});

	}else{
		res.render('index');
	}

	


	
});

app.get("/menu/new", function(req, res){
	res.render('menu/new');
});

app.listen(8081);
