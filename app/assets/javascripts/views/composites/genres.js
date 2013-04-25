MA.Views.CollectionViews = MA.Views.CollectionViews || {};

MA.Views.CollectionViews.Genres = Backbone.Marionette.CompositeView.extend({
  template: 'composites/filter',
  className: 'genres',
  id: 'aaa',
});

MA.addInitializer(function(){
  MA.composites.genres = new MA.Views.CollectionViews.Genres({
	itemView: MA.Views.Items.Genre,
	collection: MA.collections.categories
  });
  MA.composites.genres.trigger('reset');
});