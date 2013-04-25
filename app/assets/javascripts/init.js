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


MA.addRegions({
  navbar: '#navbar',
  main: '#main',
  filter: '#filter'
});

MA.vent.on("authentication:switch_views", function(ev) {
  MA.main.show(new MA.layouts.main.views[$(ev.target).data('content')]);
  MA.filter.close();
});

MA.vent.on("authentication:logged_in", function() {
  MA.navbar.show(new MA.Views.Items.LogoutNavbar({model: MA.currentUser}));
  MA.filter.show(MA.composites.genres);
  MA.main.show(MA.composites.movies);
});

MA.vent.on("authentication:logged_out", function() {
  MA.navbar.show(new MA.Views.Items.LoginNavbar());
  MA.filter.show(MA.composites.genres);
  MA.main.show(MA.composites.movies);
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
