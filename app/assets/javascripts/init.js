MA = new Backbone.Marionette.Application();

MA.Views = {};
MA.Views.Layouts = {};
MA.Models = {};
MA.Collections = {};
MA.Routers = {};
MA.Helpers = {};

// Instantiated global variables
MA.layouts = {};
MA.composites = {};
MA.collections = {};
MA.models = {};
MA.navigations = {};


MA.addRegions({
  navbar: '#navbar',
  main: '#main',
  filter: '#filter'
});


MA.vent.on("authentication:logged_in", function() {
  app = new MA.AppController();
  app.show();
});

MA.vent.on("authentication:logged_out", function() {
  app = new MA.AppController();
  app.show();
});

MA.vent.on("authentication:switch_views", function(ev) {
  MA.main.show(new MA.layouts.main.views[$(ev.target).data('content')]);
  MA.filter.close();
});


MA.vent.on("menu:new_movie", function(ev) {
  MA.main.show(new MA.layouts.main.views[$(ev.target).data('content')]);
  MA.filter.close();  
});


MA.bind("initialize:after", function() {
  if (MA.currentUser) {
    MA.vent.trigger("authentication:logged_in");
  }
  else {
    MA.vent.trigger("authentication:logged_out");
  }
});
