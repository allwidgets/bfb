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
	], function(Backbone,Templates) {


	/**
	 * Navbar parse view constructor.
	 * @type {[app.Navbar]}
	 */
	app.AppContainer = Backbone.View.extend({

		tagName: "div",

		//		className: "app-container",

		// events: {
		// 	"click .button-create-new-event": "createNewEvent",
		// 	"keyup #eventName": "saveNewEvent"
		// },

		/**
		 * Initializes the Navbar view.
		 */
		initialize: function(options) {		
			
			/**
			 * Get the header view.
			 */
		    this.template = Handlebars.templates.app_container;

		},

		render: function() {
			this.$el.html();
			return this;
		},

		// createNewEvent: function() {
		// 	$('.moment').addClass("moment-expand");
		// 	$('#eventName').focus();
		// },

		// saveNewEvent: function() {
		// 	$('.search-wrapper').addClass("search-wrapper-expand");
		// 	$('.search-wrapper-pointer').fadeIn();
		// 	$('.additional-information').addClass("additional-information-expand");
		// 	$('.delete-event').fadeIn();
		// }

	});

	return app.AppContainer;
});
