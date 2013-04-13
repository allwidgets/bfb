/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with backbone dependency that returns a SignUp view.
 * @param  {[Backbone]} Backbone) {} Extends Backbone.View.
 * @return {[app.SignUp]} returns SignUp view.
 */
define([
	"backbone",
	"templates",
], function(Backbone) {


	/**
	 * SignUp backbone view constructor.
	 * @type {[app.SignUp]}
	 */
	app.SignUp = Backbone.View.extend({

		id: "signupModal",
		
		className: "modal hide fade",

		events: {
			"keyup #inputPassword": "showConfirmPassword",
			"keyup #inputConfirmPassword": "enableSubmitButton",
			"click .btn-create-account": "signUp"
		},

		/**
		 * Initializes the SignUp view.
		 */
		initialize: function(options) {

			this.$el.attr({
				"tabindex":"-1",
				"role": "dialog",
				"aria-hidden": "true"
			});

			this.template = Handlebars.getTemplate("app_sign_up");

		},

		render: function() {
			this.$el.html(this.template());
			return this;
		},

		renderAndInsertToDOM: function() {

			var modal = this;
			this.render();
			
			$('body').append(this.$el);
			$('#signupModal').modal('show');
			$('#signupModal').on('hidden', function () {
				modal.remove();
			});

		},

		showConfirmPassword: function() {
			if ($("#inputPassword").val().length > 0) {
				$('.confirm-password').slideDown();	
			} else {
				$('.confirm-password').slideUp();
				$('.confirm-password input').val("");
				$('.btn-create-account').attr("disabled",true);
			}
		},

		enableSubmitButton: function() {
			if ($("#inputConfirmPassword").val().length > 0) {
				$('.btn-create-account').removeAttr("disabled");
			} else {
				$('.btn-create-account').attr("disabled",true);
			}
		},

		signUp: function() {
			var name = $('#inputName').val();
			var email = $('#inputEmail').val();
			var password = $('#inputPassword').val();
			var confirmPassword = $('#inputConfirmPassword').val();

			if (password == confirmPassword) {
				var user = new Backbone.User();
				user.set("username", email);
				user.set("fullName", name);
				user.set("password", password);

				user.signUp(null, {
				  success: function(user) {
				    // Sig nup successful, let the user create his first app.
				    $('.create-account').slideUp();
				    $('.btn-create-account').off();
				    
				    setTimeout(function() {
				    	$('#signUpModalLabel').html("Create your first app");
				    	$('.btn-create-account').html("Start using Uhura");
				    	$('.create-project').slideDown();
				    	$('.btn-create-account').on('click', function() {
				    		var appName = $('#inputAppName').val();
				    		var companyName = $('#inputCompany').val();
				    		var projectObject = new ss6.Project();
				    		projectObject.set("parent",Backbone.User.current());
				    		projectObject.set("appName",appName);
				    		projectObject.set("appToken",MD5(appName));
				    		projectObject.set("appMode","edit");
				    		projectObject.set("companyName",companyName);
				    		projectObject.setACL(new Backbone.ACL(Backbone.User.current()));
				    		projectObject.save({
				    			success: function(results) {
				    				$('#signupModal').modal('hide')
				    				$('.logged-out-wrapper').fadeOut();
				    				$('.navbar-inner').fadeOut("400", function() {
				    					
				    					// Unbind self from view.
				    					self.undelegateEvents();
				    					self.$el.removeData().unbind();

				    					// Remove self from view
				    					self.remove();

				    					//Create new app view.
				    					new ss6.AppView();						    					

				    				});
				    			},
				    			error: function(results) {
				    				alert("App Creation Error: " + error.code + " " + error.message);
				    			}
				    		});
				    	});
				    },700);
				  },
				  error: function(user, error) {
				    // Show the error message somewhere and let the user try again.
				    alert("Sign Up Error: " + error.code + " " + error.message);
				  }
				});
			};
		}

	});

	return app.SignUp;
});
