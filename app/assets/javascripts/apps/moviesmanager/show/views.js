MA.module('MoviesLib.Show', function(Show, App, Backbone, Marionette, $, _) {

	Show.MovieListView = Backbone.Marionette.CollectionView.extend({

		template: 'items/movie',
		className: 'movie well',
		events: {
			'click': 'toggleDetails'
		},
		toggleDetails: function() {
			this.$el.find('.description').toggle();
		}

	});

});
