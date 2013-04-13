/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with backbone dependency that returns a CellResultsWebView view.
 * @param  {[Backbone]} Backbone) {} Extends Backbone.View.
 * @return {[app.CellResultsWebView]} returns CellResultsWebView view.
 */
define([
	"backbone",
	"templates"
], function(Backbone) {


	/**
	 * CellResultsWebView backbone view constructor.
	 * @type {[app.CellResultsWebView]}
	 */
	app.CellResultsWebView = Backbone.View.extend({
		
		className: "results-cell",

		/**
		 * Initializes the CellResultsWebView view.
		 */
		initialize: function(options) {

			/**
			 * Get footer template.
			 * @type {[Handlebars template]}
			 */
			this.template = Handlebars.getTemplate("cell_results_web");

		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

	});

	return app.CellResultsWebView;
});
