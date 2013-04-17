/**
 * Configure paths for require.js
 */
require.config({
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "Bootstrap"
        },
        "modernizr": {
            exports: "Modernizr"
        },
        'jquery.hotkeys': {
            deps: ['jquery'],
            exports: 'jQuery.fn.hotkeys'
        },
    }, // end Shim Configuration
    paths: {
        "jquery": "vendor/jquery/jquery",
        "jquery.hotkeys": "vendor/jquery/jquery.hotkeys",
        "underscore": "vendor/underscore-amd/underscore",
        "backbone": "vendor/backbone-amd/backbone",
        "uhura": "vendor/uhura/uhura",
        "handlebars": "vendor/handlebars/handlebars",
        "bootstrap": "vendor/bootstrap/bootstrap.min",
        "modernizr": "vendor/modernizr/modernizr",
        "templates": "templates/_templates",
        "appContainer": "views/app_container_view",
        "appNavbar": "views/app_navbar_view",
        "appFooter": "views/app_footer_view",
        "user": "models/user",
        "app": "../js/",
    },
    waitSeconds: 2
});


/**
 * Create the router for the app.
 * @param  {[type]} AppRouter) {var appRouter = new AppRouter;}
 * @return {[Backbone.Router]} Returns a Backbone.Router
 */
require(['routers/app_router'], function(AppRouter) {


    var appRouter = new AppRouter;

});
