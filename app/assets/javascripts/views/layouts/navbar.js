MA.Views.Layouts.Navbar = Backbone.Marionette.Layout.extend({
  template: 'layouts/navbar',
  regions: {
    navbar: '#navbar'
  },

  views: {},

  events: {
    'click ul.nav li a': 'switchViews'
  },

  onShow: function() {
    //
  },

  switchViews: function(e) {
    e.preventDefault();
    MA.vent.trigger("authentication:switch_views", e);
  }

});

MA.addInitializer(function() {
  MA.layouts.navbar = new MA.Views.Layouts.Navbar();
});
