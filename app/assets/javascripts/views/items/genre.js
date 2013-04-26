MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.Genre = Backbone.Marionette.ItemView.extend({
	tagName: 'ul',
	template: 'items/genre',
	className: 'category',
	
	events: {
		'click .genre': 'genreClicked'
	}
	
	genreClicked: function(e) {
		e.preventDefault();
		
		var genre = $(e.currentTarget).data('genre');
		this.trigger('genre:selected', genre);
	}
});