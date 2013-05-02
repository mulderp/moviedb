MA.module('Manager.Show', function(Show, MA, Backbone, Marionette, $, _) {

	Show.Controller = Marionette.Controller.extend({
		showAllMovies: function() {
			var that = this;
			var movies = MA.request("movies:mymovies", function(movies) {
				var moviesView = that.getMoviesIndexView(movies);
				MA.filter.close();
				MA.main.show(moviesView);
			});
		},
		
		showNewMovie: function() {
		    var moviesNew = new Show.AddMovieView({collection: movies});
		},

		getMoviesIndexView: function(movies) {
			var moviesIndex = new Show.MovieListView({collection: movies});
			return moviesIndex;
		},
		
		getAddMoviesView: function(movies) {
			var moviesIndex = new Show.AddMovieView({collection: movies});
			return moviesIndex;
		},
	});
	
});