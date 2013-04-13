/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with backbone dependency that returns a Navbar view.
 * @param  {[Backbone]} Backbone) {} Extends Backbone.View.
 * @return {[app.Navbar]} returns Navbar view.
 */
define([
	"backbone",
	"templates"
], function(Backbone) {


	/**
	 * Navbar backbone view constructor.
	 * @type {[app.Navbar]}
	 */
	app.Navbar = Backbone.View.extend({

		tagName: "nav",

		className: "navbar navbar-fixed-top",

		events: {
			"click .btn-log-in": "logIn",
			"click .btn-sign-up": "signUp"
		},

		/**
		 * Initializes the Navbar view.
		 */
		initialize: function(options) {

			/**
			 * Check status of current user
			 * @type {[User log status]}
			 */
		    var current_user = { id: "claes1" };

			if (current_user) {

				this.template = Handlebars.templates.app_navbar_logged_in;

			} else {

				this.template = Handlebars.templates.app_navbar_logged_out;

			}

		},

		render: function() {
			this.$el.html(this.template());
			return this;
		},

		logIn: function() {
			
			require(["app/views/app_login_view"], function(LoginView) {

				if ($('#signinModal').length > 0) {

					$('#signinModal').modal('show');

				} else {
					
					var loginView = new LoginView();
					
					loginView.renderAndInsertToDOM();

				}

			});

		},

		signUp: function() {

			require(["app/views/app_sign_up_view"], function(SignUpView) {

				if ($('#signupModal').length > 0) {

					$('#signupModal').modal('show');

				} else {
					
					var signupView = new SignUpView();
					
					signupView.renderAndInsertToDOM();

				}

			});

		}

	});

	return app.Navbar;
});
