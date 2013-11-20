var express = require('express');
var Sequelize = require ('sequelize');
var app = express();
var port = 8000;

var pass = null;
var usern = "root";
var dataBaseName = 'Legitsuu';

var sequelize = new Sequelize(dataBaseName, usern, pass, {
	"host": "localhost"
});

app.use(express.bodyParser());
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// api routes

app.get('/api/exercise/next', function(req,res){

	var whereQuery = JSON.parse(JSON.stringify(req.query));
	delete whereQuery.exerciseTime;

	exercise.findAll({where:whereQuery}).success(function(exercises){
		var numExercises = Math.round((req.query.exerciseTime*60)/40);
		console.log(req.query);
		var exerciseList = {list:[]};
		for(i=0;i<numExercises;i++){
			var e = Math.floor(Math.random() * (exercises.length));
			exerciseList.list.push(exercises[e]);
			exerciseList.list.push({
				name: "Rest"
			});
		}
		res.send(exerciseList);
		console.log(exerciseList);
	});
	
});


app.use(express.static(__dirname));

var exercise = sequelize.define('Exercise', {
	name: Sequelize.STRING,
	difficulty: Sequelize.INTEGER,
	equipment: Sequelize.STRING,
	bodyFocus: Sequelize.STRING,
	step1: Sequelize.STRING,
	step2: Sequelize.STRING,
	step3: Sequelize.STRING
});


sequelize.sync();

app.listen(port);