MA.module('MoviesLib.Show', function(Show, MA, Backbone, Marionette, $, _) {

  Show.Controller = {
    showAllMovies: function() {
	  var that = this;
      var movies = MA.request("movies", function(movies) {
		var metaMovie = new Backbone.Model({total: movies.length});
	    var moviesView = that.getMoviesView(movies, metaMovie);
	    MA.main.show(moviesView);
      });
    },
    showMoviesByGenre: function() {
      var movies = new MA.Collections.Movies();
      var moviesView = this.getMoviesView();
      MA.main.show(moviesView);
    },
    getMoviesView: function(movies, metaMovie) {
      var movieLibView = new Show.MoviesLibView({collection: movies, model: metaMovie});
      return movieLibView;
    }

  }
});
