

var azure = require('azure');
var uuid = require('node-uuid');

exports.list = function(req, res){
    var client = azure.createTableService();
    console.log("SEED");
};