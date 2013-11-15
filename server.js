var express = require('express');
var Sequelize = require ('sequelize');
var app = express();
var port = 8000;

var pass = null;
var usern = "root";
var dataBaseName = 'Legitsu';

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

app.get('/api/exercise/next', function(req,res){

	var numExercises = Math.round((req.query.exerciseTime*60)/40);
	var exerciseList = {list:[]};
	for(i=0;i<numExercises;i++){
		exercise.findAll().success(function(exercises){
		var e = Math.floor(Math.random() * (exercises.length));
		exerciseList.list.push(exercises[e]);
	});
	}
	console.log(exerciseList);
	res.send(exerciseList);
	// exercise.findAll().success(function(exercises){
	// 	var e = Math.floor(Math.random() * (exercises.length));
	// 	res.send(exercises[e]);
	// });
});
// api routes get listed here
//  apiroutes here: app.get('/',)
app.use(express.static(__dirname));

var exercise = sequelize.define('Exercise', {
	name: Sequelize.STRING,
	difficulty: Sequelize.INTEGER,
	equipment: Sequelize.STRING
});

var bodyFocus = sequelize.define('BodyFocus', {
	bodyFocus: Sequelize.STRING
});

// var goal = sequelize.define('Goal', {
// goal: Sequelize.STRING
// });

sequelize.sync();

app.listen(port);