MA.Models.Genre = Backbone.Model.extend({
	defaults: {
		selected: false
	},
	
	toggle: function() {
		var that = this;
		if (this.get('selected') == true) {
			that.set('selected', false);
		}
		else
		{
			that.set('selected', true);
		}
		return this;
	}
});

MA.Collections.Categories = Backbone.Collection.extend({
	model: MA.Models.Genre	
});
