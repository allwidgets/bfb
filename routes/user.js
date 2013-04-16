
/*
 * GET users listing.
 */
process.env['AZURE_STORAGE_ACCOUNT'] = 'slaskhas';
process.env['AZURE_STORAGE_ACCESS_KEY'] = 'PClz6GdXTpfzylw9Tx9n9oATv2M8HoEVRbfYRsfgzP5MfM6GC+DT4lNQhxxMXrYcVNNS+hBsNVf52OCNjS98BA==';

var azure = require('azure');
var uuid = require('node-uuid');

exports.list = function(req, res){

    var client = azure.createTableService();

    var query = azure.TableQuery
    .select()
    .from('nodes')
    .where('PartitionKey eq ?', 'partition1');
    client.queryEntities(query, function(error, entities){
	    if(!error){
		console.log(entities);
		//entities contains an array of entities
	    }
	});
};

exports.show = function(req, res){
    //    var client = azure.createTableService(ServiceClient.DEVSTORE_STORAGE_ACCOUNT, ServiceClient.DEVSTORE_STORAGE_ACCESS_KEY, ServiceClient.DEVSTORE_TABLE_HOST);
    var client = azure.createTableService();

	  /*
    
  client.createTableIfNotExists('nodes', function(error){
	  if(error){
	      throw error;
	  }
	  
	  var query = azure.TableQuery
	      .select()
	      .from('nodes');

	  client.queryEntities(query, function(r){console.log(r)});
	  */
  client.createTableIfNotExists('nodes', function(error){
	  if(error){
	      throw error;
	  } else {
	      console.log("no error");
	  

	  var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	  //	  var rowKey = uuid.v1();
	  var rowKey = "28d93c50-a5e7-11e2-b85d-d14b46979388";
/*
	  var item = {
	      RowKey: rowKey,
	      PartitionKey: 'partition1',
	      Template: 'paragraph',
	      Data: { text: lorem },
	      Ts: 1365395578
	  };
*/

//	  client.insertEntity('nodes', item, function(){
//	      });

	  client.queryEntity('nodes', 'partition1', rowKey , function(error, serverEntity){
		  if(!error){
		      console.log(serverEntity);
		  }
	      });


	  };
      });
	  


  res.send("respond with a resource");
};

/*
		  var query = azure.TableQuery
		      .select()
		      .from('nodes');

		  client.queryEntities(query, function(r){console.log(r)});

 */