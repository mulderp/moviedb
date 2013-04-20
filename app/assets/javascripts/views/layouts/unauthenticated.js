MA.Views.Layouts.Unauthenticated = Backbone.Marionette.Layout.extend({
  template: 'layouts/unauthenticated',
  regions: {
    tabContent: '#main'
  },

  views: {},

  events: {
    'click ul.nav li a': 'switchViews'
  },

  onShow: function() {
    this.views.login = MA.Views.Unauthenticated.Login;
    this.views.signup = MA.Views.Unauthenticated.Signup;
    this.tabContent.show(new this.views.login);
  },

  switchViews: function(e) {
    e.preventDefault();
    this.tabContent.show(new this.views[$(e.target).data('content')]);
  }

});

MA.addInitializer(function() {
 // MA.layouts.unauthenticated = new MA.Views.Layouts.Unauthenticated();
});
