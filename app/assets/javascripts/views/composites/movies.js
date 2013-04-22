MA.Views.Composites = MA.Views.Composites || {};

MA.Views.Composites.Movies = Backbone.Marionette.CompositeView.extend({
  className: 'movies',
  id: 'movies',
  template: 'composites/movies'

});

MA.addInitializer(function(){
  MA.collections.movies = new MA.Collections.Movies();
  MA.composites.movies = new MA.Views.Composites.Movies({
	itemView: MA.Views.Items.Movie,
	model: new MA.Models.MetaMovie({total: 1}),
	collection: MA.collections.movies
  });
  MA.collections.movies.fetch();
});