MA.module('Header', function(Header, MA, Backbone, Marionette, $, _) {
  this.startWithParent = false;

  var API = {

  };

  Header.on("start", function() {
	var header = new Header.Show.Controller();
    header.showNavbar();
  })
});