/**
 * app_router.js handles routing for the app. 
 * It instantiates the Navbar on initialization for all routes.
 */



/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with Backbone dependency that returns a Router.
 * @param  {[Backbone]} Backbone) {} Extends Backbone router.
 * @return {[app.Workspace]} returns Router.
 */
define([
	"backbone",
	"uhura",
	"handlebars",
	"bootstrap",
	"modernizr",
	"appContainer",
	"appNavbar",
	"appFooter",
	"user",
	], function(Backbone,Uhura,Handlebars,Bootstrap,Modernizr,AppContainer,AppNavbar,AppFooter,User) {


	/**
	 * Backbone router constructor.
	 * @type {[app.Workspace]}
	 */
	app.Workspace = Backbone.Router.extend({

		
		/**
		 * Set the routes for the app.
		 * @type {Object}
		 */
		routes: {
			"": "index",
			"_=_": "index",
			"languages/": "languages",
			"*path": "notFound"
		},


		/**
		 * Initializer for the app router.
		 * It instantiates the Navbar for all routes.
		 * @return {[type]} [description]
		 */
		initialize: function() {


			/**
			 * Initialize Backbone history tracking.
			 */
			Backbone.history.start({pushState: true});


			/**
			 * Instantiate the Navbar, render it and append it to the DOM.
			 */
			app.me=new app.UserModel({"me": true });

			var navbarView = new AppNavbar();
			navbarView.render();
			$('body').prepend(navbarView.el);


			/**
			 * Instantiate the app container.
			 */
			var appContainer = new AppContainer();
			appContainer.render();
			$('body').append(appContainer.el);


			/**
			 * Instantiate the footer view.
			 */
			var appFooter = new AppFooter();
			appFooter.render();
			$('.app-container').append(appFooter.el);						

		},


		/**
		 * Index action for the app route.
		 */
		index: function() {

		    var currentUser = { id: "claes1"  };
			
		    if (currentUser) {
			
			require(["app/views/app_logged_in_view"], function(LoggedInView) {
				
				var loggedInView = new LoggedInView();
				loggedInView.render();
				$('.app-container').prepend(loggedInView.el);
				
			    });
			
		    } else {
			
			require(["app/views/app_logged_out_view"], function(LoggedOutView) {
				
				var loggedOutView = new LoggedOutView();
				loggedOutView.render();
				$('.app-container').prepend(loggedOutView.el);
				
			    });
			
		    }
		    
		},

		languages: function() {
			
		},

		notFound: function() {

		}

	});

	return app.Workspace;
});
