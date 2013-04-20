MA.Views.Layouts.Main = Backbone.Marionette.Layout.extend({
  template: 'layouts/main',
  regions: {
    content: '#content'
  }
});

MA.addInitializer(function() {
  MA.layouts.main = new MA.Views.Layouts.Main();
});
