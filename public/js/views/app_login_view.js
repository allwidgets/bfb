/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with backbone dependency that returns a Login view.
 * @param  {[Backbone]} Backbone) {} Extends Backbone.View.
 * @return {[app.Login]} returns Login view.
 */
define([
	"backbone",
	"templates",
], function(Backbone) {


	/**
	 * Login backbone view constructor.
	 * @type {[app.Login]}
	 */
	app.Login = Backbone.View.extend({

		id: "signinModal",
		
		className: "modal hide fade",

		events: {
			"click .btn-log-in": "logIn"
		},

		/**
		 * Initializes the Login view.
		 */
		initialize: function(options) {

			this.$el.attr({
				"tabindex":"-1",
				"role": "dialog",
				"aria-hidden": "true"
			});

			this.template = Handlebars.getTemplate("app_login");

		},

		render: function() {
			this.$el.html(this.template());
			return this;
		},

		renderAndInsertToDOM: function() {

			var modal = this;
			this.render();
			
			$('body').append(this.$el);
			$('#signinModal').modal('show');
			$('#signinModal').on('hidden', function () {
				modal.remove();
			});

		},

		logIn: function() {

			var username = $('#inputLoginEmail').val();
			var password = $('#inputLoginPassword').val();
			
			if (username.length > 0 && password.length) {

				Backbone.User.logIn(username, password, {
				  success: function(user) {
				    // Do stuff after successful login.
				    console.log("Logged in.");
				  },
				  error: function(user, error) {
				    // The login failed. Check error to see why.
				    alert("Login Error: " + error.code + " " + error.message);
				  }
				});
			}
			
		}

	});

	return app.Login;
});
