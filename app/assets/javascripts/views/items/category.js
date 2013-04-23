MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.Category = Backbone.Marionette.ItemView.extend({
	tagName: 'ul',
	template: 'items/category',
	className: 'category'
});