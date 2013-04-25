MA.Collections.Movies = Backbone.Collection.extend({
  url: '/api/movies.json',
  initialize: function() {
    this._meta = {};
    this.model = MA.Models.Movie;
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
