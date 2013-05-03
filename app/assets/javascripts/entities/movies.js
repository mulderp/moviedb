MA.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

	Entities.Movie = Backbone.Model.extend({
		toJSON: function() {
			json = _.clone(this.attributes);
			return _.extend(json, {editable: this.editable()});
		},
		editable: function() {
			return MA.currentUser != undefined;
		}
	});

	Entities.Movies = Backbone.Collection.extend({

		model: Entities.Movie,
		
		baseURL: '/api/',
		
		genreURL: function(genre) {
		   return this.baseURL + 'genres/' + genre + '.json';
		},
		
		searchURL: function(keywords) {
		    return this.baseURL + 'search.json' + '?q=' + keywords;
		},

		url: function() {
			var genre = this.meta('activeGenre');

			if (genre != undefined) {
				return this.genreURL(genre);
			}
			else
			{
				return this.baseURL + 'movies.json';	
			}
		},

		initialize: function() {
			this._meta = {};
		},

		parse: function(data) {
			this.meta('total', data.meta.total);
			return data.movies;
		},

		meta: function(prop, value) {
			if (value === undefined) {
				return this._meta[prop]
			} else {
				this._meta[prop] = value;
			}
		},
		
		search: function(keywords) {
			var model = this;
			var options = {}
			options.url = this.searchURL(keywords); 
			options.success = function(resp, status, xhr) { console.log(resp); }
		    return (this.sync || Backbone.sync).call(this, '_search', this, options); 
		}
	});

	var API = {
		getMovies: function(callback) {
			var deferred = $.Deferred();
			var movies = new Entities.Movies();

			movies.fetch({success: callback});
			deferred.resolve(movies);
			deferred.promise();
			return movies;
		},
		
		getMoviesByGenre: function(genre, callback) {
			var movies = new Entities.Movies();
			movies.meta('activeGenre', genre);
			movies.fetch({success: callback});
			return movies;
		},
		
		getMyMovies: function(genre, callback) {
			var movies = new Entities.Movies();
			movies.meta('private', 'true');
			movies.fetch({success: callback});
			return movies;
		},
		
		searchMovies: function(keywords) {
			var movies = new Entities.Movies();
			console.log(keywords);
			movies.search(keywords);
			return movies;
		}
	};

	MA.reqres.setHandler("movies:all", function(callback) {
		return API.getMovies(callback);
	});

	MA.reqres.setHandler("movies:genre", function(genre, callback) {
		return API.getMoviesByGenre(genre, callback);
	});

	MA.reqres.setHandler("movies:search", function(keywords, callback) {
		return API.searchMovies(keywords);
	});

});
