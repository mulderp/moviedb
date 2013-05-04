MA.Models.Genre = Backbone.Model.extend({
	defaults: {
		selected: false
	},
	
	is_selected: function() {
		return (this.get('selected') == true);
	},
	
	toggle: function() {
		if (this.is_selected()) {
			this.set('selected', false);
		}
		else
		{
			this.set('selected', true);
		}
	}
});

MA.Collections.Categories = Backbone.Collection.extend({
	
	model: MA.Models.Genre,
	

});
