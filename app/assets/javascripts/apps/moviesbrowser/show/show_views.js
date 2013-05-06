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
	
	Show.RatingsItemView = Backbone.Marionette.ItemView.extend({
		template: 'items/rating',
		className: 'rating',
		tagName: 'li',

		events: {
			'click .rating-item': 'ratingClicked'
		},
		
		initialize: function() {
		   var that = this;
		   this.model.on("change:selected", function() {
              that.render();
              that.trigger('rating:selected', that);
	      });	
		},
		
		ratingClicked: function(e) {
			this.model.toggle();
		},
		
	});
	
	Show.GenresView = Backbone.Marionette.CollectionView.extend({
		className: 'genres',
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

	Show.RatingsView = Backbone.Marionette.CollectionView.extend({
		className: 'ratings',
		tagName: 'ul',
    	itemView: Show.RatingsItemView,
		
		
		initialize: function() {
			this.on('itemview:rating:selected', this.notifyController);
		},
		
		notifyController: function(view) {
			if (view.model.get('selected')) {
			  this.trigger('rating:selected', view.model.get('name'));
			}
			else
			{
			   this.trigger('rating:deselected', view.model.get('name'));
			}
		}
 	});
	

});
