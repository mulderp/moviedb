MA.Views.Items = MA.Views.Items || {};

MA.Views.Items.Login = Backbone.Marionette.ItemView.extend({
  template: 'items/login',

  events: {
    'submit form': 'login'
  },

  initialize: function() {
    this.model = new MA.Models.UserSession();
    this.modelBinder = new Backbone.ModelBinder();
  },

  onRender: function() {
    this.modelBinder.bind(this.model, this.el);
  },

  login: function(e) {
 
    console.log("* login *");

    var self = this,
        el = $(this.el);

    e.preventDefault();

    el.find('input.btn-primary').prop('value', 'loading');
    el.find('.alert-error').remove();
    el.find('.help-block').remove();
    el.find('.control-group.error').removeClass('error');

    $.post('/api/users/sign_in.json', {user: this.model.attributes})
     .done(function(response) { 
	     console.log("ok"); 
	     console.log(response);
	     MA.currentUser = new MA.Models.User(response.user);
	     MA.vent.trigger("authentication:logged_in");
	  })
     .fail(function(response) { 
	     console.log('...'); 
	     var result = $.parseJSON(response.responseText);
	     console.log(result);
	     el.find('input.btn-primary').prop('value', 'Sign up');
	 });

  }

});
