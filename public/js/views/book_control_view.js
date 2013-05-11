/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with backbone dependency that returns a BookControlView view.
 * @param  {[Backbone]} Backbone) {} Extends Backbone.View.
 * @return {[app.BookControlView]} returns BookControlView view.
 */
define([
	"backbone",
	"app/models/article",
	"templates"
	], function(Backbone,Articles) {


	/**
	 * BookControlView backbone view constructor.
	 * @type {[app.BookControlView]}
	 */
	app.BookControlView = Backbone.View.extend({
		
		className: "book-control-wrapper",		

		/**
		 * Initializes the BookControlView view.
		 */
		initialize: function(options) {
		    var bvc=this;

		    bvc.template = Handlebars.templates.book_control;
		    bvc.Article = new app.ArticleObject({"RowKey":"75292cb0-a5e6-11e2-9404-334bbfe0ec0d"});
		    bvc.Article.on('change',function(){bvc.render()});
		    //		    app.articles= new app.ArticlesObject();
		    //		    app.articles.add(bvc.Article);
		    app.article=bvc.Article;
		    bvc.Article.fetch({},{ "content": true });
		    
		},

		render: function() {
		    var bvc=this;
		    this.$el.html(this.template());

		    require([
			     "app/views/article_control_view",
			     ], function(ArticleControl) {
				var articleControlView = new ArticleControl({model: bvc.Article });
				articleControlView.render(bvc.Article);
				bvc.$el.html(articleControlView.el);
			    });
		    
		    return this;
		}
	});

	return app.BookControlView;
});
