process.env['AZURE_STORAGE_ACCOUNT'] = 'slaskhas';
process.env['AZURE_STORAGE_ACCESS_KEY'] = 'PClz6GdXTpfzylw9Tx9n9oATv2M8HoEVRbfYRsfgzP5MfM6GC+DT4lNQhxxMXrYcVNNS+hBsNVf52OCNjS98BA==';

var azure = require('azure');
var uuid = require('node-uuid');
var _und = require(".././node_modules/azure/node_modules/underscore/underscore-min");

exports.art1 = function(req, res){

    var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    var piedata = { foo: [ 10,20,30] };

    var paragraph1 = { id: "pg1" ,  template: "paragraph" , type: "paragraph" , ts: 1365395578 };
    var paragraph2 = { id: "pg2" ,  template: "paragraph" , type: "paragraph" , ts: 1365395578 };
    var paragraph3 = { id: "pg3" ,  template: "paragraph" , type: "paragraph" , ts: 1365395578 };
    var piechart1 = { id: "pie1", template: "pieone"  , ts: 1365396502 };
    var header1 = { id: "header1", type: "header"  ,template: "headerh3", data: "Main Title" , ts: 1365395578 };
    var article1 = { id: "art1",  type: "article" , template: "tmpla1" , nodeorder: ["header1","pg1","pg2","pie1","pg3"] , ts: 1365395578 ,  nodes: { pie1: piechart1 , pg1: paragraph1 , pg2: paragraph2 , pg3: paragraph3 , header1: header1 }  };
    //var article1 = { id: "art1",  type: "article" , template: "tmpla1" , nodeorder: ["header1","pg1","pg2","pie1","pg3"] , ts: 1365395578 ,  nodes: {  }  };
    var chapter1 = { id: "ch1", type: "chapter" , template: "tmplc1" , nodeorder: ["art1"] , nodes: { art1: article1  } , ts: 1365395578 };
    
    var app1 = {  id: "app1" , data: { somedata: { highscore: 123 ,  "a": 5 , "b": "lorem ipsum" }  } };
    var app2 = {  id: "app2" , data: { somedata: { members: 456  ,  "zz": [1,2,3] , "vvv": "lorem ipsum" }  } };
    
    var claes1 = { id: "claes1" , name: "Claes Nygren" , friends: ["jay1"], apps: [ app1] };
    var jay1 = { id: "jay1" , name: "Jay Jones" , friends: ["claes1"], apps: [app1,app2] };

    var users = [ claes1 , jay1  ];

    res.setHeader('Content-Type', 'application/json');
    if (req.query["content"] != undefined ) { article1.nodes['pg1'].data=lorem ;  };
    if (req.query["content"] != undefined ) { article1.nodes['pg2'].data=lorem ;  };
    if (req.query["content"] != undefined ) { article1.nodes['pg3'].data=lorem ;  };
    if (req.query["content"] != undefined ) { article1.nodes['pie1'].data=piedata ;  };
    res.send( JSON.stringify(article1));
};



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
					 console.log("ADD_TO"+JSON.stringify(ret));
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

