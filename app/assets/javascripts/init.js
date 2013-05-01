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

MA.addInitializer(function() {
  MA.module("MoviesLib").start();
});

MA.on("initialize:after", function() {
  if (Backbone.history) {
    Backbone.history.start();
  }
});

var originalTrigger = Backbone.Events.trigger;
Backbone.Events.trigger = function(){
  console.log("Event Triggered:");
  console.log(arguments.join(", "));
  originalTrigger.apply(this, arguments);
}


