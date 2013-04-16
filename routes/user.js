
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
		//		console.log(entities);
		//entities contains an array of entities
	    }
	});
};


exports.findOrCreate  = function(udata, callback ){
    var client = azure.createTableService();

    console.log("\n\nfindOrCreate:"+JSON.stringify(udata));
    var query = azure.TableQuery
    .select()
    .from('users')
    .where('FacebookUid eq ?', udata.facebook_uid );
    
    client.queryEntities(query, function(e,res){
	    if (res.length<1) {
		var rowKey = uuid.v1();

		var userinfo = {
		    RowKey: rowKey,
		    PartitionKey: 'partition1',
		    FacebookUid: udata.facebook_uid,
		    Name: udata.name
		};
		client.insertEntity('users', userinfo, function(){
			console.log("\n\nJUST INSERTED: "+JSON.stringify(userinfo));
			callback(null,userinfo);			
		    });
		
	    } else {
		var db_user=res[0];
		console.log("\n\n\n\nFOUND:"+JSON.stringify(db_user));
		udata['RowKey']=db_user['RowKey'];
		callback(null,udata);
	    }
	});

};



exports.show = function(req, res){
    //    var client = azure.createTableService(ServiceClient.DEVSTORE_STORAGE_ACCOUNT, ServiceClient.DEVSTORE_STORAGE_ACCESS_KEY, ServiceClient.DEVSTORE_TABLE_HOST);
    var client = azure.createTableService();
    res = res || { send: function(r){console.log(r);} };

    console.log("REQ"+req);

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
  client.createTableIfNotExists('users', function(error){
	  if(error){
	      throw error;
	  } else {
	      console.log("no error");
	  
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



		  var query = azure.TableQuery
		      .select()
		      .from('nodes')
		      .where('facebook_uid eq ?', '513322529');

		  client.queryEntities(query, function(r){console.log(r)});
		  /*
 
	  client.queryEntity('users', 'partition1', rowKey , function(error, serverEntity){
		  if(!error){
		      console.log(serverEntity);
		  }
	      });
		  */

	  };
      });
	  


  res.send("respond with a resource");
};

