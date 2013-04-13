/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with parse dependency that returns a NodeObject.
 * @param  {[Parse]} Parse) {} Extends Parse.Object.
 * @return {[app.NodeObject]} returns NodeObject.
 */
define([
	"backbone"
], function(Backbone) {


	/**
	 * Event parse object constructor.
	 * @type {[app.NodeObject]}
	 */
	app.NodeObject = Backbone.Model.extend({

	});

	return app.NodeObject;

});