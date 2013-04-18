/**
 * Initializes or adds to app namespace.
 * @type {[Object]}
 */
var app = app || {};



/**
 * require.js module with parse dependency that returns a UserObject.
 * @param  {[Parse]} Parse) {} Extends Parse.Object.
 * @return {[app.UserObject]} returns UserObject.
 */
define([
	"backbone"
], function(Backbone) {


	/**
	 * Event parse object constructor.
	 * @type {[app.UserObject]}
	 */
	app.UserModel = Backbone.Model.extend({
		url: "#",
		initialize: function(attr, options) {
		    if (this.get("me")) {
			this.url="/users/me.json";
		    }
		}
	});

	return app.UserModel;

});