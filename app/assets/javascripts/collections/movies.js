MA.Collections.Movies = Backbone.Collection.extend({
  url: '/api/movies.json',
  parse: function(data) {
	this.meta = new MA.Models.MetaMovie(data.meta);
	return data.movies;
  }
});

MA.addInitializer(function() {
  MA.Collections.Movies.model = MA.Models.Movie;
})
