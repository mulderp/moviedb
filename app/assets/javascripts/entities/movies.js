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

    url: function() {
	  var genre = this.meta('activeGenre');
	  var baseUrl = '/api/';
	  
	  if (genre != undefined) {
	    return baseUrl + 'genres/' + genre + '.json';	
	  }
	  else
	  {
	    return baseUrl + 'movies.json';	
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
	console.log(genre);
	   movies.meta('activeGenre', genre);
	  movies.fetch({success: callback});
      return movies;
     }
  };

  MA.reqres.setHandler("movies:all", function(callback) {
    return API.getMovies(callback);
  });

  MA.reqres.setHandler("movies:genre", function(genre, callback) {
    return API.getMoviesByGenre(genre, callback);
  });
});
