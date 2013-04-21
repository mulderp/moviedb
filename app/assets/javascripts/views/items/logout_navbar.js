MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.LogoutNavbar = Backbone.Marionette.ItemView.extend({
  template: 'items/logout_navbar',
  model: MA.currentUser,

  views: {},

  onRender: function() {
	this.model = MA.currentUser.toJSON();
  }

});