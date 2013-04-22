MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.LogoutNavbar = Backbone.Marionette.ItemView.extend({

  template: 'items/logout_navbar',
  model: MA.currentUser,

  views: {},

  events: {
	'click #addmovie': 'showNewMovie',
    'click #logout': 'logout'
  },

  showNewMovie: function(ev) {
	ev.preventDefault();
	MA.vent.trigger('menu:new_movie', ev);
  },

  logout: function(){
	$.ajax({
	 method: 'DELETE',
	 url: '/api/users/sign_out.json',
	 data: {user: this.model.attributes},
	 success: function(response) { 
	     MA.currentUser = null;
	     MA.vent.trigger("authentication:logged_out");
	  },
	  error: function(response) { 
	     console.log('...'); 
	     var result = $.parseJSON(response.responseText);
	     console.log(result);
	     el.find('input.btn-primary').prop('value', 'Sign up');
	 }
	});
  },

  onRender: function() {
	this.model = MA.currentUser.toJSON();
  }

});