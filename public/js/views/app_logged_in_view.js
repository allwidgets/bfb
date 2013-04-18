/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with backbone dependency that returns a LoggedInView view.
 * @param  {[Backbone]} Backbone) {} Extends Backbone.View.
 * @return {[app.LoggedInView]} returns LoggedInView view.
 */
define([
	"backbone",
	"templates"
], function(Backbone) {


	/**
	 * LoggedInView backbone view constructor.
	 * @type {[app.LoggedInView]}
	 */
	app.LoggedInView = Backbone.View.extend({
		
		className: "book-wrapper",

		/**
		 * Initializes the LoggedInView view.
		 */
		initialize: function(options) {

			this.template = Handlebars.templates.app_logged_in_view;

		},

		render: function() {

			var bookWrapper = this;
			
			require([
				"app/views/book_control_view",
			], function(BookControl) {
				
				var bookControlView = new BookControl();
				bookControlView.render();
				bookWrapper.$el.append(bookControlView.el);
				console.log(bookWrapper.el);
			});

			return this;
		}
	});

	return app.LoggedInView;
});
