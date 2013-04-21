MA.Views.Composites = MA.Views.Composites || {};

MA.Views.Composites.Movies = Backbone.Marionette.CollectionView.extend({
  className: 'movies',
  id: 'movies',
  template: 'composites/movies',

});

MA.addInitializer(function(){
  MA.collections.movies = new MA.Collections.Movies();
  MA.composites.movies = new MA.Views.Composites.Movies({
	itemView: MA.Views.Items.Movie,
	collection: MA.collections.movies
  });
  MA.collections.movies.fetch();
});