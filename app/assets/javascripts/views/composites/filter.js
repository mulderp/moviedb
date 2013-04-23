MA.Views.CollectionViews = MA.Views.CollectionViews || {};

MA.Views.CollectionViews.Filter = Backbone.Marionette.CollectionView.extend({

});

MA.addInitializer(function(){
  MA.composites.categories = new MA.Views.CollectionViews.Filter({
	itemView: MA.Views.Items.Category,
	collection: MA.collections.categories
  });
  console.log(MA.collections.categories);
  MA.composites.categories.trigger('reset');
});
