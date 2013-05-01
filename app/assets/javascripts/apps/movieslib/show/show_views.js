MA.module('MoviesLib.Show', function(Show, App, Backbone, Marionette, $, _) {

	Show.MovieItemView = Backbone.Marionette.ItemView.extend({

		template: 'items/movie',
		className: 'movie well',
		events: {
			'click': 'toggleDetails'
		},
		toggleDetails: function() {
			this.$el.find('.description').toggle();
		}

	});

	Show.MoviesLibView = Marionette.CompositeView.extend({
		template: 'composites/movies',
		className: 'movies',
		id: 'movies',
		itemView: Show.MovieItemView
	});


	Show.GenresView = Backbone.Marionette.ItemView.extend({
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

});
