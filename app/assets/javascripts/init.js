MA = new Backbone.Marionette.Application();

MA.Views = {};
MA.Views.Layouts = {};
MA.Models = {};
MA.Collections = {};
MA.Routers = {};
MA.Helpers = {};

// Instantiated global layouts
MA.layouts = {};

MA.addRegions({
  navbar: '#navbar',
  main: '#main'
});

MA.vent.on("authentication:switch_views", function(ev) {
  MA.main.show(new MA.layouts.main.views[$(ev.target).data('content')]);  
});

MA.vent.on("authentication:logged_in", function() {
  MA.navbar.show(MA.layouts.logout);
  MA.main.show(MA.layouts.main);
});

MA.vent.on("authentication:logged_out", function() {
  MA.navbar.show(MA.layouts.login);
  MA.main.show(MA.layouts.main);
});

MA.bind("initialize:after", function() {
  if(MA.currentUser) {
    MA.vent.trigger("authentication:logged_in");
  }
  else {
    MA.vent.trigger("authentication:logged_out");
  }
});
