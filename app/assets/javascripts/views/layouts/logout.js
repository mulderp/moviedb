MA.Views.Layouts.Logout = Backbone.Marionette.Layout.extend({
  template: 'layouts/logout',
  regions: {
    navbar: '#navbar'
  },

  views: {},

});

MA.addInitializer(function() {
  MA.layouts.logout = new MA.Views.Layouts.Logout();
});
