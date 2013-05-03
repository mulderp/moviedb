MA.module('Header.Show', function(Show, MA, Backbone, Marionette, $, _) {

	Show.Controller = Marionette.Controller.extend({

		showNavbar: function() {
			if (MA.currentUser) {
				var menu_view = new Show.MemberView({model: MA.currentUser})
				MA.navbar.show(menu_view);
				this.listenTo(menu_view, "browser", this._browse);
				this.listenTo(menu_view, "manager:start", this._menuSelected);
			}
			else
			{
				var menu_view = new Show.GuestView();
				MA.navbar.show(menu_view);
				this.listenTo(menu_view, "browser:search", this._search);
			}
		},
		
		_browse: function() {
			MA.execute("browser:start");
		},
		
		_menuSelected: function(item) {
			MA.execute("manager:start");
		},
		
		_search: function(keywords) {
			var movies = MA.request("movies:search", keywords);
			console.log(movies);
		}
		

	});

});
