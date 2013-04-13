var express = require("express");
var app = express();
var port = process.env.PORT || 1337;

var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var piedata = { foo: [ 10,20,30] };

var paragraph1 = { id: "pg1" ,  type: "paragraph" , ts: 1365395578 };
var piechart1 = { id: "pie1", template: "tmplp1"  , ts: 1365396502 };
var article1 = { id: "art1",  type: "article" , template: "tmpla1" , nodeorder: ["pg1","pg2","pie1","pg3"] , ts: 1365395578 ,  nodes: { pie1: piechart1 , pg1: paragraph1 , pg2: { id: "pg2" , type: "paragraph" , ts: 1365395578 } , pg3: { id:  "pg3"  , type: "paragraph" , ts: 1365395578 } }  };
var chapter1 = { id: "ch1", type: "chapter" , template: "tmplc1" , nodeorder: ["art1"] , nodes: { art1: article1  } , ts: 1365395578 };

var app1 = {  id: "app1" , data: { somedata: { highscore: 123 ,  "a": 5 , "b": "lorem ipsum" }  } };
var app2 = {  id: "app2" , data: { somedata: { members: 456  ,  "zz": [1,2,3] , "vvv": "lorem ipsum" }  } };

var claes1 = { id: "claes1" , name: "Claes Nygren" , friends: ["jay1"], apps: [ app1] };
var jay1 = { id: "jay1" , name: "Jay Jones" , friends: ["claes1"], apps: [app1,app2] };

var users = [ claes1 , jay1  ];

app.get('/', function (req, res) {
	var book = { id: "book1" , type: "book" , ts: 1365395578, nodeorder: ["ch1","ch2","ch3"] ,   nodes: { ch1: chapter1 , ch3: { id: "ch3" , type: "chapter" , ts: 1365395578 } , ch2: { id: "ch2" , type: "chapter", ts: 1365395578 } } };
	res.setHeader('Content-Type', 'application/json');
	if (req.query["content"] != undefined ) { book.nodes['ch1'].nodes['art1'].nodes['pg1'].data=lorem ;  };
	if (req.query["content"] != undefined ) { book.nodes['ch1'].nodes['art1'].nodes['pg2'].data=lorem ;  };
	if (req.query["content"] != undefined ) { book.nodes['ch1'].nodes['art1'].nodes['pg3'].data=lorem ;  };
	if (req.query["content"] != undefined ) { book.nodes['ch1'].nodes['art1'].nodes['pie1'].data=piedata ;  };
	res.send( JSON.stringify(book));
    });
app.get('/book.json', function (req, res) {
	var book = { id: "book1" , type: "book" , ts: 1365395578, nodeorder: ["ch1","ch2","ch3"] ,   nodes: { ch1: chapter1 , ch3: { id: "ch3" , type: "chapter" , ts: 1365395578 } , ch2: { id: "ch2" , type: "chapter", ts: 1365395578 } } };
	res.setHeader('Content-Type', 'application/json');
	if (req.query["content"] != undefined ) { book.nodes['ch1'].nodes['art1'].nodes['pg1'].data=lorem ;  };
	if (req.query["content"] != undefined ) { book.nodes['ch1'].nodes['art1'].nodes['pg2'].data=lorem ;  };
	if (req.query["content"] != undefined ) { book.nodes['ch1'].nodes['art1'].nodes['pg3'].data=lorem ;  };
	if (req.query["content"] != undefined ) { book.nodes['ch1'].nodes['art1'].nodes['pie1'].data=piedata ;  };
	res.send( JSON.stringify(book));
    });
app.get('/nodes/ch1.json', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	var chapter1 = { id: "ch1", type: "chapter" , template: "tmplc1" , nodeorder: ["art1"] , nodes: { art1: article1  } , ts: 1365395578 };
	if (req.query["content"] != undefined ) { chapter1.nodes['art1'].nodes['pg1'].data=lorem ;  };
	if (req.query["content"] != undefined ) { chapter1.nodes['art1'].nodes['pg2'].data=lorem ;  };
	if (req.query["content"] != undefined ) { chapter1.nodes['art1'].nodes['pg3'].data=lorem ;  };
	if (req.query["content"] != undefined ) { chapter1.nodes['art1'].nodes['pie1'].data=piedata ;  };
	res.send( JSON.stringify(chapter1));
    });
app.get('/nodes/art1.json', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	if (req.query["content"] != undefined ) { article1.nodes['pg1'].data=lorem ;  };
	if (req.query["content"] != undefined ) { article1.nodes['pg2'].data=lorem ;  };
	if (req.query["content"] != undefined ) { article1.nodes['pg3'].data=lorem ;  };
	if (req.query["content"] != undefined ) { article1.nodes['pie1'].data=piedata ;  };
	res.send( JSON.stringify(article1));
    });
app.get('/nodes/pie1.json', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	if (req.query["content"] != undefined ) { piechart1.data=piedata ;  };
	res.send( JSON.stringify(piechart1));
    });

app.get('/users/claes1.json', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send( JSON.stringify(claes1));
    });
app.get('/users/jay1.json', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send( JSON.stringify(jay1));
    });


app.listen(port);