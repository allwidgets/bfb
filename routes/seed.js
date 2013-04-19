
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

exports.show = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var ret={};
    var client = azure.createTableService();
    client.queryEntity('nodes'
			     , 'partition1'
			     , req.params.id
			     , function(error, obj){
				 if(!error){
				     var ret= { "RowKey": obj.RowKey,
						"PartitionKey": 'partition1',
						"Data": obj.Data ,
						"NodeOrder": obj.NodeOrder ,
						"Parent": ( obj.Parent || ""),
						"Template": obj.Template ,
						"Ts": obj.Ts   };
				     try { 
					 ret.Data = JSON.parse( ret.Data ); } 
				     catch (err) {console.log("node.Data Format error")} ; 
				     try { 
					 ret.NodeOrder = JSON.parse( ret.NodeOrder ); } 
				     catch (err) {console.log("node.Data Format error")} ; 
				     
				     // entity contains the returned entity
				     console.log(JSON.stringify(ret));
				     res.send(  JSON.stringify(ret));
				 }
		       });
};



exports.update = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var obj=req.body;
    var ret= { "RowKey": obj.RowKey,
	       "PartitionKey": 'partition1',
	       "Data": ( obj.Data  || "{}" ),
	       "Parent": ( obj.Parent || ""),
	       "NodeOrder": obj.NodeOrder || "[]" ,
    	       "Template": ( obj.Template || "paragraph" ) ,
    	       "Ts": (new Date).getTime() };
    if (ret.Data != "{}" ) {ret.Data=JSON.stringify(ret.Data)};
    if (ret.NodeOrder != "[]" ) {ret.NodeOrder=JSON.stringify(ret.NodeOrder)};
    console.log(JSON.stringify(ret));
    var client = azure.createTableService();
    client.mergeEntity('nodes', ret , function(error){
				 if(!error){
				     // entity contains the returned entity
				     ret.Data=JSON.parse(ret.Data);
				     console.log(JSON.stringify(ret));
				     res.send( JSON.stringify(ret));
				 }
		       });
};

