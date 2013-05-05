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
		tagName: 'li',
		id: 'genres-filter',

		events: {
			'click .genre-item': 'genreClicked'
		},
		
		initialize: function() {
		   var that = this;
		   this.model.on("change:selected", function() {
              that.render();
              that.trigger('genre:selected', that);
	      });	
		},
		
		genreClicked: function(e) {
			e.preventDefault();

			this.model.toggle();
		},
		
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
			if (view.model.get('selected')) {
			  this.trigger('genre:selected', view.model.get('name'));
			}
			else
			{
			   this.trigger('genre:deselected', view.model.get('name'));
			}
		}
 	});
	

});
