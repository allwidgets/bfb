
process.env['AZURE_STORAGE_ACCOUNT'] = 'slaskhas';
process.env['AZURE_STORAGE_ACCESS_KEY'] = 'PClz6GdXTpfzylw9Tx9n9oATv2M8HoEVRbfYRsfgzP5MfM6GC+DT4lNQhxxMXrYcVNNS+hBsNVf52OCNjS98BA==';

var azure = require('azure');
var uuid = require('node-uuid');
var _und = require(".././node_modules/azure/node_modules/underscore/underscore-min");

exports.list = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var ret=[];
    var client = azure.createTableService();
    var query = azure.TableQuery
    .select()
    .from('nodes')
    .where('PartitionKey eq ?', 'partition1');
    client.queryEntities(query, function(error, entities){
	    if(!error){
		_und.each(entities,function(obj){
			var retel = { "RowKey": obj.RowKey,
				      "PartitionKey": 'partition1',
				      "Parent": ( obj.Parent || ""),
				      "Data": obj.Data ,
				      "NodeOrder": obj.NodeOrder ,
				      "Template": obj.Template ,
				      "Ts": obj.Ts   };
			try { 
			    retel.Data = JSON.parse( retel.Data ); } 
			catch (err) {console.log("node.Data Format error")} ; 
			try { 
			    retel.NodeOrder = JSON.parse( retel.NodeOrder ); } 
			catch (err) {console.log("node.NodeOrder Format error")} ; 
			ret.push(retel);
		    });
		//		console.log(ret);
		res.send( JSON.stringify({ "nodes": ret }));
	    }
	});

};
