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
	"adminRow",
	"nodes",
	"templates",
	], function(Backbone,NodeRow,Nodes) {


	/**
	 * AdminView backbone view constructor.
	 * @type {[app.AdminView]}
	 */
	app.AdminView = Backbone.View.extend({
		
		className: "admin-wrapper",		

		/**
		 * Initializes the AdminView view.
		 */
		initialize: function(options) {
		    var adm=this;
		    adm.template = Handlebars.templates.admin_base;
		    if (!app.nodes) {
			app.nodes=new Nodes();
			};
		},

		render: function() {
		    var adm=this;
		    adm.$el.html(adm.template());
		    app.nodes.each(function(obj){
			    var arv=new app.AdminRowView({ model: obj});
			    adm.$el.children("ul").append(arv.render().el);
			});
		    return this;
		}
	});

	return app.AdminView;
});
