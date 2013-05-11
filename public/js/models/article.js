/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with parse dependency that returns a ArticleObject.
 * @param  {[Parse]} Parse) {} Extends Parse.Object.
 * @return {[app.ArticleObject]} returns ArticleObject.
 */
define([
	"backbone"
], function(Backbone) {


	/**
	 * Event parse object constructor.
	 * @type {[app.ArticlesObject]}
	 */
	app.ArticleObject = Backbone.Model.extend({
		url: function() {
		    return "/api/nodes/"+this.get("RowKey")
		},
		fetch: function( options, queryObj ){
		    var _url = this.url;

		    if( queryObj ){
			this.url = this.url() + '?' + $.param( queryObj );
		    }
		    Backbone.Model.prototype.fetch.apply(this, options);    
		    this.url = _url;
		}



	});

	app.ArticlesObject = Backbone.Collection.extend({
		model: app.ArticleObject
	});

	return app.ArticlesObject;

});