/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with backbone dependency that returns a ArticleControlView view.
 * @param  {[Backbone]} Backbone) {} Extends Backbone.View.
 * @return {[app.ArticleControlView]} returns ArticleControlView view.
 */
define([
	"backbone",
	"app/models/article",
	"templates"
	], function(Backbone,Articles) {


	/**
	 * ArticleControlView backbone view constructor.
	 * @type {[app.ArticleControlView]}
	 */
	app.ArticleControlView = Backbone.View.extend({
		
		className: "article-control-wrapper",		

		/**
		 * Initializes the ArticleControlView view.
		 */
		initialize: function(options) {
		    var avc=this;
		    this.model=options.model;
		    this.template = Handlebars.templates.article_control;
		},

		render: function() {
		    var avc=this;
		    var templates={};
		    templates["paragraph"]=Handlebars.templates.paragraph;
		    templates["pieone"]=Handlebars.templates.pieone;
		    templates["headerh3"]=Handlebars.templates.headerh3;
		    this.$el.html(this.template());
		    var nodes=this.model.get("nodes");
		    _.each(this.model.get("nodeorder"),function(key){
			    var node=nodes[key];
			    console.log(node);
			    var the_template=templates[node.template];
			    avc.$el.append(the_template( { data: node.data } ));
			});
		    
		    return this;
		}
	});

	return app.ArticleControlView;
});
