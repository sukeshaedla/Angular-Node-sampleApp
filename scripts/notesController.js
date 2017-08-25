
var fs = require('fs');

module.exports.get = function (req, res) {
  // console.info('testing');
  // console.info(req);
  var notes = fs.readFileSync('app/data/notes/' + req.params.id + '.json');
  // var notes = {test: 'test001'};
  res.setHeader('Content-type', 'application/json');
  res.send(notes);
}

module.exports.getAll = function(req, res){
	var path = './app/data/notes/';

	var files = [];
	try{
		files = fs.readdirSync(path);
	}
	catch(e){
		res.send('[]');
		res.end();
	}

	var results = "["

	for (var idx = 0; idx < files.length; idx++) {
		if (files[idx].indexOf(".json") == files[idx].length - 5) {
			results += fs.readFileSync(path + "/" + files[idx]) + ',';
		}
	}

	results  = results.substr(0, results.length - 1);
	results += "]";

	res.setHeader('Content-type', 'application/json');
	res.send(results);
	res.end();
}
