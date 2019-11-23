var express = require('express');

var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/primera_pagina");


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

app.listen(8081);
