MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.AddMovie = Backbone.Marionette.ItemView.extend({
  template: 'items/add_movie',

  events: {
    'submit form': 'add'
  }
});