
process.env['AZURE_STORAGE_ACCOUNT'] = 'slaskhas';
process.env['AZURE_STORAGE_ACCESS_KEY'] = 'PClz6GdXTpfzylw9Tx9n9oATv2M8HoEVRbfYRsfgzP5MfM6GC+DT4lNQhxxMXrYcVNNS+hBsNVf52OCNjS98BA==';

var azure = require('azure');
var uuid = require('node-uuid');
var _und = require(".././node_modules/azure/node_modules/underscore/underscore-min");

exports.delete = function(req, res){    
    res.setHeader('Content-Type', 'application/json');    
    var ret={};
    var client = azure.createTableService();
    client.deleteEntity('nodes'
			, {
			    PartitionKey : 'partition1'
				, RowKey : req.params.id
				}
			, function(error){
			    if(!error){
				ret = { result: "delete fail"}     // Entity deleted
			    }
			});
    res.send( JSON.stringify(ret));
}

exports.list = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var ret=[];
    var client = azure.createTableService();
    var query = azure.TableQuery
    .select('RowKey','Template','Timestamp','Ts','Data')
    .from('nodes')
    .where('PartitionKey eq ?', 'partition1');
    client.queryEntities(query, function(error, entities){
	    if(!error){
		_und.each(entities,function(obj){
			ret.push({ "RowKey": obj.RowKey,
				    "Data": JSON.stringify(obj.Data) ,
				    "Template": obj.Template ,
				    "Ts": obj.Ts   });
		    });
		//		console.log(ret);
		res.send( JSON.stringify(ret));
	    }
	});

};