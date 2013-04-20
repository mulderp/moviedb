MA.Views.Layouts.Main = Backbone.Marionette.Layout.extend({
  template: 'layouts/main',
  regions: {
    main: '#main'
  },

  views: {},

  onShow: function() {
    this.views.login = MA.Views.Unauthenticated.Login;
    this.views.signup = MA.Views.Unauthenticated.Signup;
    this.main.show(new this.views.login);
  }
});

MA.addInitializer(function() {
  MA.layouts.main = new MA.Views.Layouts.Main();
});
