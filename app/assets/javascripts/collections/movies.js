MA.Collections.Movies = Backbone.Collection.extend({
  url: '/api/movies.json',
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

MA.addInitializer(function() {
  MA.Collections.Movies.model = MA.Models.Movie;
})
