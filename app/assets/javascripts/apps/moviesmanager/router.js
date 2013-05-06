MA.module("Manager", {
  startWithParent: false,

  define: function(Manager, MA, Backbone, Marionette, $, _){
    "use strict";

    var Router = Backbone.Router.extend({
      routes: {
        "": "showDefault",
        "/mymovies/new": "showAdd",
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

    MA.addInitializer(function(){
      var router = new Router();
    });
  }
});