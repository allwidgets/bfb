/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with parse dependency that returns a QueryObject.
 * @param  {[Parse]} Parse) {} Extends Parse.Object.
 * @return {[app.QueryObject]} returns QueryObject.
 */
define([
	"backbone"
], function(Backbone) {


	/**
	 * Event parse object constructor.
	 * @type {[app.QueryObject]}
	 */
	app.QueryObject = Backbone.Model.extend({

	});

	return app.QueryObject;

});