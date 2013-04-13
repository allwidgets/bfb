/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with backbone dependency that returns a LoggedOutView view.
 * @param  {[Backbone]} Backbone) {} Extends Backbone.View.
 * @return {[app.LoggedOutView]} returns LoggedOutView view.
 */
define([
	"backbone",
	"templates"
], function(Backbone) {


	/**
	 * LoggedOutView backbone view constructor.
	 * @type {[app.LoggedOutView]}
	 */
	app.LoggedOutView = Backbone.View.extend({
		
		className: "splash-wrapper",

		/**
		 * Initializes the LoggedOutView view.
		 */
		initialize: function(options) {

			this.template = Handlebars.templates.app_logged_out_view;

		},

		render: function() {
			this.$el.html();
			return this;
		}
	});

	return app.LoggedOutView;
});
