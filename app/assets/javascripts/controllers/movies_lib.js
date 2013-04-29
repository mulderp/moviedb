MA.Controllers = MA.Controllers || {};

MA.Controllers.MoviesLib = Marionette.Controller.extend({

  getAll: function(){
    var deferred = $.Deferred();

    this._getMovies(function(movie){
      deferred.resolve(movie);
    });

    return deferred.promise();
  },

  getByCategory: function(categoryName){
    var deferred = $.Deferred();

    this._getMovie(function(unfiltered) {
      var filtered = unfiltered.filter(function(movie){
        console.log(movie);
        var categories = movie.get("categories");
        return _.include(categories, categoryName);
      });

      var movie = new MA.Collections.Movies(filtered);
      deferred.resolve(movie);
    });

    return deferred.promise();
  },

  _getMovie: function(callback){
    var movieCollection = new MA.Collections.Movies();
    movieCollection.fetch({success: callback});
  }


});
