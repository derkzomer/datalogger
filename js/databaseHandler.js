var mysql = require('mysql')
var config = require('../js/config')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: config.db_password,
	database: 'datalogger'
})

var log = function(mac_id, type, value, callback){

	var sql = "INSERT INTO data VALUES (?, ?, ?)"

	data = [mac_id, type, parseFloat(value)]

	console.log('data: '+data)

	connection.query(sql, data, function(err, rows, fields) {
		if (!err) {
			console.log(rows)
			if (rows.length === 0) {
				callback(null, null)
			} else {
				callback(null, rows)
			}
		} else {
			console.log(err)
			callback(err, null)
		}
	})

}

module.exports = {
	log: log
}
