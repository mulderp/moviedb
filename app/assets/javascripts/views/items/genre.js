MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.Genre = Backbone.Marionette.ItemView.extend({
	tagName: 'ul',
	template: 'items/genre',
	className: 'category'
});