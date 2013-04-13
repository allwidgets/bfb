var app = app || {};

define([
	"backbone",
	"app/models/query"
], function(Backbone,QueryObject) {

	app.QueriesCollection = Backbone.Collection.extend({
		
		model: QueryObject,
		
		q: "",
		
		src: ["bing","itunes","youtube"],
		
		srcn: 0,
		
		ren_token: "KMYPQVCHVQTABNKNKNIILRJNHUCMDPHUSKXCQUJN",
		
		url : function() { return ('http://apidev.wedunno.com/search.json?ren_token='+this.ren_token+'&q=' + this.q + "&source="+this.src[this.srcn] ) },
		
		initialize: function(attr, options) {
		    this.q = attr.q ;
		    this.srcn = attr.srcn;
		},
		
		parse: function(data) {
			console.log(data.search_result);
		    _.each(data.search_result,function(obj,n){data.search_result[n].id = data.search_result[n].fav_id });
		    return data.search_result ;
		}
		
	});

	return app.QueriesCollection;

});