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


	Show.GenresItemView = Backbone.Marionette.ItemView.extend({
		template: 'items/genre',
		className: 'genres',
		id: 'genres-filter',

		events: {
			'click .genre-item': 'genreClicked'
		},
		
		initialize: function() {
			this.listenTo(this.model, 'change:selected', this.toggleRatings);
		},
		
		genreClicked: function(e) {
			e.preventDefault();

			this.model.toggle();
		},
		
		toggleRatings: function() {
			var ratings = $(this.el).find('.ratings');
			if (this.model.is_selected()) {
			  this.trigger('genre:selected', this.model.get('name'));
			  ratings.show();
			}
			else {
			   ratings.hide();
			}
		}
	});
	
	Show.GenresView = Backbone.Marionette.CollectionView.extend({
		className: 'genres',
		id: 'genres-filter',
		tagName: 'ul',
		itemView: Show.GenresItemView,
		
		initialize: function() {
			this.on('itemview:genre:selected', this.notifyController);
		},
		
		notifyController: function(view) {
			this.trigger('genre:selected', view.model.get('name'));
		}
 	});
	

});
