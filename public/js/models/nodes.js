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
	"backbone",
	"node"
	], function(Backbone,Node) {


	/**
	 * Event parse object constructor.
	 * @type {[app.NodeObject]}
	 */
	app.NodeCollection = Backbone.Collection.extend({
		model: app.NodeModel,
		url: "/api/nodes",
		parse: function(response) {
		    return response.nodes;
		}

	});

	return app.NodeCollection;

});
