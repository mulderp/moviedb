MA.Views.Layouts.Main = Backbone.Marionette.Layout.extend({
  template: 'layouts/main',
  regions: {
    main: '#main'
  },

  views: {},

  onShow: function() {
    this.views.login = new MA.Views.Items.Login();
    this.views.signup = new MA.Views.Items.Signup();
    this.main.show(this.views.login);
  }
});

MA.addInitializer(function() {
  MA.layouts.main = new MA.Views.Layouts.Main();
});
