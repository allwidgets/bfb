process.env['AZURE_STORAGE_ACCOUNT'] = 'slaskhas';
process.env['AZURE_STORAGE_ACCESS_KEY'] = 'PClz6GdXTpfzylw9Tx9n9oATv2M8HoEVRbfYRsfgzP5MfM6GC+DT4lNQhxxMXrYcVNNS+hBsNVf52OCNjS98BA==';

var azure = require('azure');
var uuid = require('node-uuid');
var _und = require(".././node_modules/azure/node_modules/underscore/underscore-min");



exports.findOrCreate  = function(udata, callback ){
    var client = azure.createTableService();

    console.log("\n\nfindOrCreate:"+JSON.stringify(udata));
    var query = azure.TableQuery
    .select()
    .from('nodes')
    .where('FacebookUid eq ?', udata.facebook_uid );
    
    client.queryEntities(query, function(e,res){
	    if (res.length<1) {
		var rowKey = uuid.v1();

		var nodeinfo = {
		    RowKey: rowKey,
		    PartitionKey: 'partition1',
		    FacebookUid: udata.facebook_uid,
		    Name: udata.name
		};
		client.insertEntity('nodes', nodeinfo, function(){
			console.log("\n\nJUST INSERTED: "+JSON.stringify(nodeinfo));
			callback(null,nodeinfo);			
		    });
		
	    } else {
		var db_node=res[0];
		console.log("\n\n\n\nFOUND:"+JSON.stringify(db_node));
		udata['RowKey']=db_node['RowKey'];
		callback(null,udata);
	    }
	});

};


exports.create = function(req, res){    
    res.setHeader('Content-Type', 'application/json');    
    var ret={};
    var client = azure.createTableService();
    var rowKey = uuid.v1();

    console.log(req.body);

    var nodeinfo = req.body;
    nodeinfo.RowKey=rowKey;
    nodeinfo.PartitionKey= 'partition1';
    
    client.insertEntity('nodes', nodeinfo, function(){
	    console.log("\n\nJUST INSERTED: "+JSON.stringify(nodeinfo));
	    res.send( JSON.stringify(nodeinfo));
	});
    
};


formatObj = function(obj) {
    return { "RowKey": obj.RowKey,
	     "PartitionKey": 'partition1',
	     "Data": obj.Data ,
	     "NodeOrder": obj.NodeOrder ,
	     "Parent": ( obj.Parent || ""),
	     "Template": obj.Template ,
	     "Ts": obj.Ts,
	     "Nodes": {}
    };
};

exports.show = function(req, res){
    console.log("SHOW");
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
				     var ret= formatObj(obj);
				     try { 
					 ret.Data = JSON.parse( ret.Data ); } 
				     catch (err) {console.log("node.Data Format error")} ; 
				     try { 
					 ret.NodeOrder = JSON.parse( ret.NodeOrder ); } 
				     catch (err) {console.log("node.Data Format error")} ; 
				     
				     if (req.query.content ) {
					 //console.log("ADD_TO"+JSON.stringify(ret));
					 var query = azure.TableQuery
					     .select()
					     .from('nodes')
					     .where('Parent eq ?', req.params.id );
					 client.queryEntities( query
							    , function(error, entries){
								if(!error){
								    _und.each(entries,function(subobj){ ret.Nodes[subobj.RowKey]=formatObj(subobj) });
								    console.log(JSON.stringify(ret));
								    res.send(  JSON.stringify(ret));
								} else {
								    res.send(  JSON.stringify(ret));
								}
							    })

				     } else {
					 // entity contains the returned entity
					 console.log("XX"+JSON.stringify(ret));
					 res.send(  JSON.stringify(ret));
				     }
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

