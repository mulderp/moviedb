MA.Views.Layouts.Login = Backbone.Marionette.Layout.extend({
  template: 'layouts/login',
  regions: {
    navbar: '#navbar'
  },

  views: {},

  events: {
    'click ul.nav li a': 'switchViews'
  },

  switchViews: function(e) {
    e.preventDefault();
    MA.vent.trigger("authentication:switch_views", e);
  }

});

MA.addInitializer(function() {
  MA.layouts.login = new MA.Views.Layouts.Login();
});
