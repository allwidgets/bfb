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

		tagName: "article",		
		className: "articleWrapper",		

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
		    templates["title"]=Handlebars.templates.headerh3;
		    templates["image"]=Handlebars.templates.image;
		    this.$el.html(this.template());
		    var nodes=this.model.get("Nodes");
		    console.log(this.model.toJSON());
		    _.each(this.model.get("NodeOrder"),function(key){
			    console.log(key)
			    var node=nodes[key];
			    if (node) {
				console.log(node);
				console.log(node.Template);
				var the_template=templates[node.Template];
				console.log(JSON.parse(node.Data));
				avc.$el.append(the_template( JSON.parse(  node.Data ) ));
			    }
			});
		    
		    return this;
		}
	});

	return app.ArticleControlView;
});
