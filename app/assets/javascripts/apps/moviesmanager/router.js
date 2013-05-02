MA.module("Manager", {
  startWithParent: false,

  define: function(Manager, MA, Backbone, Marionette, $, _){
    "use strict";

    var Router = Backbone.Router.extend({
      routes: {
        "": "showDefault",
        "add": "showAdd",
        "other": "showOther"
      },

      before: function(){
        MA.startSubApp("Manager", {
          mainRegion: MA.main,
          navRegion: MA.navbar
        });
      },

      showAdd: function() {
	    var controller = new Manager.Show.Controller();
        controller.showNewMovie();
      },

      showOther: function(id){
        Manager.API.showNewMovie(id);
      },

    });

    // Initializer
    // -----------
    //
    // The router must always be alive with the app, so that it can
    // respond to route changes and start up the right sub-app
    MA.addInitializer(function(){
      var router = new Router();
    });
  }
});