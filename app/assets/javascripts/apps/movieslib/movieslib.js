MA.module('MoviesLib', function(LibApp, App, Backbone, Marionette, $, _) {
  this.startWithParent = false;

  var API = {
    showAllMovies: function() {
      var libApp = new LibApp.Show.Controller();
      libApp.showAllMovies();
    },

    showMoviesByGenre: function(genre) {
      var libApp = new LibApp.Show.Controller();
      libApp.showMoviesByGenre(genre);
    }

  };

  LibApp.on("start", function() {
    API.showAllMovies();
  })

});
