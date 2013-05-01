MA.module('MoviesLib.Show', function(Show, MA, Backbone, Marionette, $, _) {

	Show.Controller = Marionette.Controller.extend({
		showAllMovies: function() {
			this._showAllMovies();
			this._showGenres();
		},
		showMoviesByGenre: function(genre) {
			this._showMoviesByGenre(genre);
			this._showGenres();
			Backbone.history.navigate("#/genres/" + genre);
		},
		_showAllMovies: function() {
			var that = this;
			var movies = MA.request("movies:all", function(movies) {
				var metaMovie = new Backbone.Model({total: movies.meta('total')});
				var moviesView = that.getMoviesView(movies, metaMovie);
				MA.main.show(moviesView);
			});
		},
		_showMoviesByGenre: function() {
			var that = this;
			var movies = MA.request("movies:genre", function(movies) {
				var metaMovie = new Backbone.Model({total: movies.meta('total')});
				var moviesView = that.getMoviesView(movies, metaMovie);
				MA.main.show(moviesView);
			});
		},
		_showGenres: function() {
			var categoryNav = new Show.Filter({
				region: MA.filter
			});
			this.listenTo(categoryNav, "genre:selected", this.showMoviesByGenre);
			categoryNav.show();
		},
		getMoviesView: function(movies, metaMovie) {
			var movieLibView = new Show.MoviesLibView({collection: movies, model: metaMovie});
			return movieLibView;
		},

	});
	
	Show.Filter = Marionette.Controller.extend({

	  initialize: function(options){
	    this.region = options.region;
	  },

	  show: function(){
	    this._showCatListView(MA.collections.categories);
	  },

	  _showCatListView: function(categories){
	    var view = new Show.GenresView({
	      collection: categories
	    });
	    this.listenTo(view, "genre:selected", this._categorySelected);

	    this.region.show(view);
	  },

	  _categorySelected: function(category) {
	    this.trigger("genre:selected", category);
	  }

	});

});
