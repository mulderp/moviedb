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
		
		_showMoviesByGenre: function(genre) {
			var that = this;
			var movies = MA.request("movies:genre", genre, function(movies) {
				var metaMovie = new Backbone.Model({total: movies.meta('total')});
				var moviesView = that.getMoviesView(movies, metaMovie);
				MA.main.show(moviesView);
			});
		},
		
		_showGenres: function() {
			var genreFilter = new Show.Filter({
				region: MA.filter
			});
			this.listenTo(genreFilter, "genre:selected", this._showMoviesByGenre);
			this.listenTo(genreFilter, "genre:deselected", this._showAllMovies);
			genreFilter.show();
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
		this.listenTo(view, "genre:deselected", this._categoryDeselected);

	    this.region.show(view);
	  },

	  _categorySelected: function(category) {
	    this.trigger("genre:selected", category);
	  },
	
	  _categoryDeselected: function(category) {
		this.trigger("genre:deselected", category);
	  }

	});

});
