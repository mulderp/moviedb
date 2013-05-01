MA.module('MoviesLib', function(LibApp, App, Backbone, Marionette, $, _) {
  this.startWithParent = false;

  var API = {
    showAllMovies: function() {
      LibApp.Show.Controller.showAllMovies();
    },

    showMoviesByGenre: function(genre) {
      LibApp.Show.Controller.showMoviesByGenre(genre);
    }

  };

  LibApp.on("start", function() {
    API.showAllMovies();
  })

});
