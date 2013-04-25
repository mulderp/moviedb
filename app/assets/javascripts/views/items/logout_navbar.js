MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.LogoutNavbar = Backbone.Marionette.ItemView.extend({

  template: 'items/logout_navbar',
  model: MA.currentUser,

  events: {
    'click a.brand': 'showMain',
	'click #addmovie': 'showNewMovie',
  },

  showMain: function(ev) {
	ev.preventDefault();
	MA.vent.trigger('authentication:logged_in', ev);
  },

  showNewMovie: function(ev) {
	ev.preventDefault();
	MA.vent.trigger('menu:new_movie', ev);
  },

  onRender: function() {
	this.model = MA.currentUser.toJSON();
  }

});
