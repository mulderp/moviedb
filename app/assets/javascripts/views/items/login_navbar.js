MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.LoginNavbar = Backbone.Marionette.ItemView.extend({
  template: 'items/login_navbar',

  views: {},

  events: {
    'click ul.nav li a': 'switchViews'
  },

  switchViews: function(e) {
    e.preventDefault();
    MA.vent.trigger("authentication:switch_views", e);
  }

});