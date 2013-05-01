MA.module('Header', function(Header, MA, Backbone, Marionette, $, _) {
  this.startWithParent = false;

  var API = {
    showNavbar: function() {
      if (MA.currentUser) {
	      MA.navbar.show(new Header.Show.MemberView({model: MA.currentUser}));
	  }
	  else
	  {
	    MA.navbar.show(new Header.Show.GuestView());
	  }
    }
  };

  Header.on("start", function() {
    API.showNavbar();
  })
});