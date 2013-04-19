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
	"form2js",
	"jqueryToObject",
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
			    var el=adm.$el.find("#tab1 .noderow_list");
			    el.append(arv.render().el);
			});
		    return this;
		},
		saveNewNode: function() {
		    var nd=$("#new_node_form").toObject();
		    if (dn.Data) { nd.Data=JSON.parse(nd.Data) };
		    nd.Data = nd.Data || {};
		    var nnd=new app.NodeModel(nd);		    
		    console.log(nnd.toJSON());
		    app.nodes.add(nnd);
		    nnd.save();

		    return(false);
		},
		updateNode: function() {
		    var nd=$("#edit_node_form").toObject();
		    if (nd.Data) { nd.Data=JSON.parse(nd.Data) };
		    //alert(nd);
		    nd.Data = nd.Data || {};
		    nd.Parent = nd.Parent || "";
		    var node=app.nodes.get(nd.RowKey);
		    node.set(nd);
		    node.save();
		    return(false);
		},

		events: {
			"click .save_new_node": "saveNewNode",
			"click .save_edit_node": "updateNode",
		}

	});

	return app.AdminView;
});
