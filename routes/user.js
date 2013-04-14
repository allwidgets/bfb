
/*
 * GET users listing.
 */
var azure = require('azure');
var uuid = require('node-uuid');

exports.list = function(req, res){
  var client = azure.createTableService();


  res.send("respond with a resource");
};