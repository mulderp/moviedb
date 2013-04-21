MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.Movie = Backbone.Marionette.ItemView.extend({

  template: 'items/movie',
  className: 'movie',
  events: {
    'mouseenter': 'showDetails',
    'mouseleave': 'hideDetails',
  },
  showDetails: function() {
	this.$el.find('.description').fadeIn();
  },
  hideDetails: function() {
	this.$el.find('.description').fadeOut();
  }


});