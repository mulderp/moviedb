MA.Views.Layouts.Main = Backbone.Marionette.Layout.extend({
  template: 'layouts/main',
  regions: {
    main: '#main'
  },

  views: {}

});

MA.addInitializer(function() {
  MA.layouts.main = new MA.Views.Layouts.Main();
  MA.layouts.main.views.login = MA.Views.Items.Login;
  MA.layouts.main.views.signup = MA.Views.Items.Signup;
  MA.layouts.main.views.addmovie = MA.Views.Items.AddMovie;
});
