/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with parse dependency that returns a Navbar view.
 * @param  {[Backbone]} Backbone) {} Extends Backbone.View.
 * @return {[app.Navbar]} returns Navbar view.
 */
define([
	"backbone",
	"templates"
], function(Backbone) {


	/**
	 * Navbar parse view constructor.
	 * @type {[app.Navbar]}
	 */
	app.Footer = Backbone.View.extend({

		tagName: "section",
		
		className: "app-footer",

		/**
		 * Initializes the Navbar view.
		 */
		initialize: function(options) {

			/**
			 * Get footer template.
			 * @type {[Handlebars template]}
			 */
			this.template = Handlebars.templates.app_footer;

		},

		render: function() {
			this.$el.html(this.template());
			return this;
		},

		changeLanguage: function() {
			$('.app-container').slideUp();
			setTimeout(function(){
				$('.app-container').slideDown();
			},1000);
		}
	});

	return app.Footer;
});
