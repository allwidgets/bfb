/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with backbone dependency that returns a AdminView view.
 * @param  {[Backbone]} Backbone) {} Extends Backbone.View.
 * @return {[app.AdminView]} returns AdminView view.
 */
define([
	"backbone",
	"node",
	"templates",
	], function(Backbone,Node) {


	/**
	 * AdminView backbone view constructor.
	 * @type {[app.AdminView]}
	 */
	app.AdminRowView = Backbone.View.extend({
		
		className: "noderow",
		tagName:"li",
		initialize: function(options) {
		    var adm=this;
		    this.model = options.model;
		    adm.template = Handlebars.templates.admin_base_row;
		},

		render: function() {
		    var adm=this;
		    adm.$el.attr("id","noderow_"+adm.model.get("RowKey"));
		    this.$el.html(adm.template(adm.model.toJSON()));
		    
		    return this;
		},
		deleteItem: function() {
		    this.model.destroy();  
		},
		events: {
                    "click .node_del": "deleteItem",
		},
	});

	return this;
});
