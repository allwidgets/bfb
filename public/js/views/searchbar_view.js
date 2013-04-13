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
	"app/collections/queries_collection",
	"app/views/cell_results_web"
], function(QueriesCollection, CellResultsWebView) {


	/**
	 * Navbar backbone view constructor.
	 * @type {[app.Navbar]}
	 */
	app.SearchBarView = Backbone.View.extend({


		/**
		 * Initializes the Navbar view.
		 */
		initialize: function(options) {

			var searchBarView = this;

			/**
			 * Clear the previous results.
			 */
			$('.search-wrapper').html("");

			/**
			 * Initiate the query
			 */
			var newTitle = this.model.get("title");

			this.collection = new QueriesCollection({ q: newTitle, srcn: 0 });
			this.collection.on("reset", function(answs) {				

				searchBarView.$el.append("<div class='results-header-cell'>From the Internet</div>");

				answs.each(function(ans) {					
					searchBarView.addOne(ans);
				});

				/**
				 * Open the search bar view.
				 */
				$('.search-wrapper').addClass("search-wrapper-expand");
				$('.moments-wrapper').css({"border-right": "1px solid gainsboro"});
				
				if (searchBarView.collection.srcn < 2) {					
				    searchBarView.collection.srcn += 1;
				    searchBarView.collection.fetch();
				};

		    });
		    this.collection.fetch();

		},

		addOne: function(resultModel) {
			var cellResultsWebView = new CellResultsWebView({model: resultModel})
			cellResultsWebView.render();
			this.$el.append(cellResultsWebView.el);
		}

	});

	return app.SearchBarView;
});
