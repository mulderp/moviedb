MA.module('Header.Show', function(Show, MA, Backbone, Marionette, $, _) {

	Show.Controller = Marionette.Controller.extend({

		showNavbar: function() {
			if (MA.currentUser) {
				menu_view = new Show.MemberView({model: MA.currentUser})
				MA.navbar.show(menu_view);
				this.listenTo(menu_view, "browser", this._browse);
				this.listenTo(menu_view, "manager:start", this._menuSelected);
			}
			else
			{
				MA.navbar.show(new Show.GuestView());
			}
		},
		
		_browse: function() {
			MA.execute("browser:start");
		},
		
		_menuSelected: function(item) {
			MA.execute("manager:start");
		}
		

	});

});
