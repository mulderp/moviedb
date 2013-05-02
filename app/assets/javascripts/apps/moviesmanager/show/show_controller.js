MA.module('Manager.Show', function(Show, MA, Backbone, Marionette, $, _) {

	Show.Controller = Marionette.Controller.extend({
		showAllMovies: function() {
			var that = this;
			var movies = MA.request("movies:mymovies", function(movies) {
				var moviesView = that.getMoviesView(movies);
				MA.filter.close();
				MA.main.show(moviesView);
			});
		},
		
		showNewMovie: function() {
			
		},

		getMoviesView: function(movies) {
			var moviesIndex = new Show.MovieListView({collection: movies});
			return moviesIndex;
		},
	});
	
});