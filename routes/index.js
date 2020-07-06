var express = require('express');
var router = express.Router()
var db = require('../js/databaseHandler')

router.post('/log', function(req, res, next) {

	var content = req.body

	console.log(content)

	mac_id = content.mac_id
	type = content.type
	value = content.value

	db.log(mac_id,type,value,function(err, results){
		(results) ? res.send(results) : res.send({'error':err}) 
	})

})

module.exports = router
