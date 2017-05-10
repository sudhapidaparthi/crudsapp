var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentdb');
var student=require('./threadex/first.js');
var server = app.listen(8081, function () {
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/',function(req,res){
res.sendFile( __dirname + "/" + "register.html" );
})
app.post('/register', urlencodedParser, function (req, res) {
response = req.body;   
student.ccrud(response,function(err,student){
	if(student){
		response={
			"result":"Data is inserted successfully"
		}
		res.json(response);
	}
	else{
		error={
			"error":"sorry insertion failed"
		}
		res.json(error);
	}
});
});
app.get('/retrieve',function(req,res){
	var name="sudha";
student.gets(name,function(err,studentdata){
	if(err){
		console.log(err);
	}
	else{
		res.json(studentdata);
	}
});
});
app.get('/delete',function(req,res){
	var name="jogarao";
	student.dele(name,function(err,studentd){
		if(err){
			console.log(err);
		}
		else{
			res.json(studentd);
		}
	});
});
app.get('/update', function(req, res) {
var conditions={"n1":"sudha"};
var update={"n1":"karthik"};
var options={ multi: true };

student.update(conditions, update, options, function(err,numAffected){
		if(err){
			console.log(err);
		}
		else{
			res.json(numAffected);
		}
	});

/*function callback (err, numAffected) {*/

var host = server.address().address ;
var port = server.address().port;
console.log("Example app listening at http://%s:%s", host, port);
});

});