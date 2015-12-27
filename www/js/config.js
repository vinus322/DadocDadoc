/**
 * Created by kimminyoung on 2015-12-21.
 */
angular.module('starter.config', [])

var mysql = require('mysql');

var connection =mysql.createConnection({
  host : '115.88.201.54',
  port : 3306,
  user : 'cp152',
  password : 'cp152',
  database : 'cp152_users'
})

connection.connect(function(err) {
  if (err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
})


connection.query('SELECT * from post', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
})

connection.end();




