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
		url: "/nodes/art1.json?content=true",
	});

	app.ArticlesObject = Backbone.Collection.extend({

	});

	return app.ArticlesObject;

});