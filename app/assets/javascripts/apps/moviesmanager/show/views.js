MA.module('Manager.Show', function(Show, App, Backbone, Marionette, $, _) {

    Show.ListEmpty = Backbone.Marionette.ItemView.extend({
	  template: 'account/no_movies',
	  tagName: 'tr'
    });

    Show.MovieView = Backbone.Marionette.ItemView.extend({
	  template: 'account/movie',
	  tagName: 'tr'
    });
	
	Show.MovieListView = Backbone.Marionette.CompositeView.extend({

		template: 'account/list',
		itemView: Show.MovieView,
		itemViewContainer: 'tbody',
		emptyView: Show.ListEmpty,


	});

});
