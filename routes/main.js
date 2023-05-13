let express = require('express'),
sh = express.Router(),
O = process.cwd();

sh.all('/', (req, res) => {
	res.send({status: 'Aktive', message: 'hello Word'})
	})
	
module.exports = sh