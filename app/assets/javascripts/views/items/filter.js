MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.Filter = Backbone.Marionette.Layout.extend({

  template: 'items/filter',
  regions: { 
	filter: '#filter-inner'
  }

});