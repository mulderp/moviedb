MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.LogoutNavbar = Backbone.Marionette.ItemView.extend({
  template: 'items/logout_navbar',
  model: MA.currentUser,

  views: {},

  events: {
    'click #logout': 'logout'
  },

  logout: function(){
	$.ajax({
	 method: 'DELETE',
	 url: '/api/users/sign_out.json',
	 data: {user: this.model.attributes},
	 success: function(response) { 
	     console.log("ok"); 
	     console.log(response);
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