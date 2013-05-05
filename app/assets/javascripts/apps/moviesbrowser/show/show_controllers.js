MA.module('MoviesLib.Show', function(Show, MA, Backbone, Marionette, $, _) {

	Show.Controller = Marionette.Controller.extend({
		
		showAllMovies: function() {
			this._showAllMovies();
			this._showFilter();
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
		
		_showFilter: function() {
			var genreFilter = new Show.FilterController({
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
	
	Show.FilterController = Marionette.Controller.extend({

	  initialize: function(options){
	    this.filter = new Marionette.RegionManager();
	    this.filter.addRegion('filter', options.region);
	    this.genres = this.filter.addRegion('genres', '#genres-filter');
	    this.ratings = this.filter.addRegion('ratings', '#ratings-filter');
	  },

	  show: function(){
	    this._showGenresView(MA.collections.categories);
	    this._showRatingsView(new Backbone.Collection([{rating: '5 Stars'}, {rating: '4 Stars'}, {rating: '3 Stars'}, {rating: '2 Stars'}, {rating: '1 Stars'}])); 
	  },

	  _showGenresView: function(genres){
	    var view = new Show.GenresView({
	      collection: genres
	    });
	    this.listenTo(view, "genre:selected", this._categorySelected);
		this.listenTo(view, "genre:deselected", this._categoryDeselected);
	    this.genres.show(view);
	  },
	
	  _showRatingsView: function(ratings){
	    var view = new Show.RatingsView({
	      collection: ratings
	    });
	    this.listenTo(view, "ratings:selected", this._ratingSelected);
		this.listenTo(view, "ratings:deselected", this._ratingDeselected);
        this.ratings.show(view);
	  },

	  _categorySelected: function(category) {
	    this.trigger("genre:selected", category);
	  },
	
	  _categoryDeselected: function(category) {
		this.trigger("genre:deselected", category);
	  }

	});

});
