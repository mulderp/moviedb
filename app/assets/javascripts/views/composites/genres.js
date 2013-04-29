MA.Views.CollectionViews = MA.Views.CollectionViews || {};

MA.Views.CollectionViews.Genres = Backbone.Marionette.ItemView.extend({

  template: 'items/genres',
  className: 'genres',
  id: 'genres-filter',


  events: {
    'click .genre-item': 'genreClicked'
  },

  genreClicked: function(e) {
    e.preventDefault();

    var genre = $(e.currentTarget).data('genre');
    this.trigger('genre:selected', genre);
  }
});

MA.Navigation = MA.Navigation || {};
MA.Navigation.Filter = Marionette.Controller.extend({

  initialize: function(options){
    this.region = options.region;
  },

  show: function(){
    this._showCatListView(MA.collections.categories);
  },

  _showCatListView: function(categories){
    var view = new MA.Views.CollectionViews.Genres({
      collection: categories
    });

    this.listenTo(view, "genre:selected", this._categorySelected);

    this.region.show(view);
  },

  _categorySelected: function(category){
    this.trigger("genre:selected", category);
  }

});

MA.addInitializer(function(){
  MA.composites.genres = new MA.Views.CollectionViews.Genres({
    itemView: MA.Views.Items.Genre,
    collection: MA.collections.categories
  });
  MA.composites.genres.trigger('reset');

});

MA._genreSelected = function(genre) {
  console.log(genre);
};
