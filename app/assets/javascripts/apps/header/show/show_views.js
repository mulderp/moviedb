MA.module('Header.Show', function(Show, App, Backbone, Marionette, $, _) {

	Show.GuestView = Backbone.Marionette.ItemView.extend({
		template: 'items/login_navbar',
		events: {
			'submit .navbar-search': 'searchMovies'
		},
		
		searchMovies: function(ev) {
			var keywords = $(ev.currentTarget).children('input').val();
			this.trigger("browser:search", keywords);
			ev.preventDefault();
		}
	});


	Show.MemberView = Backbone.Marionette.ItemView.extend({

		template: 'items/logout_navbar',
		model: MA.currentUser,

		events: {
			'click a.brand': 'showMain',
			'click #addmovie': 'showNewMovie',
		},

		showMain: function(ev) {
			ev.preventDefault();
			this.trigger('browser');
		},

		showNewMovie: function(ev) {
			//ev.preventDefault();
			//var item = $(ev.currentTarget).data('content');
			//this.trigger('manager:start', item);
		},

		onRender: function() {
			this.model = MA.currentUser.toJSON();
		}

	});
});
