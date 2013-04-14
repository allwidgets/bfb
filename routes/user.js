
/*
 * GET users listing.
 */
var azure = require('azure');
var uuid = require('node-uuid');

exports.list = function(req, res){
  var client = azure.createTableService();
  /*
  client.createTableIfNotExists('nodes', function(error){
	  if(error){
	      throw error;
	  }

	  var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	  var item = {
	      RowKey: uuid.v1(),
	      PartitionKey: 'partition1',
	      Template: 'paragraph',
	      Data: { text: lorem },
	      Ts: 1365395578
	  };


	  client.insertEntity('nodes', item, function(){});


      });

  */

  res.send("respond with a resource");
};