
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

