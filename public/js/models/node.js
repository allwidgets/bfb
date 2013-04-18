/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with parse dependency that returns a NodeModel.
 * @param  {[Parse]} Parse) {} Extends Parse.Object.
 * @return {[app.Nodemodel]} returns NodeModel.
 */
define([
	"backbone"
], function(Backbone) {


	/**
	 * Event parse object constructor.
	 * @type {[app.NodeModel]}
	 */
	app.NodeModel = Backbone.Model.extend({
		idAttribute: "RowKey",
		urlRoot: "/nodes"
	});

	return app.NodeModel;

});
