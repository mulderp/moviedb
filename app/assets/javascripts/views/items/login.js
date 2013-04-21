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

    var self = this,
        el = $(this.el);

    e.preventDefault();

    el.find('input.btn-primary').button('loading');
    el.find('.alert-error').remove();

    this.model.save(this.model.attributes, {
      success: function(userSession, response) {
        MA.currentUser = new MA.Models.User(response);
        MA.vent.trigger("authentication:logged_in");
      },
      error: function(userSession, response) {
        var result = $.parseJSON(response.responseText);
        el.find('form').prepend(MA.Helpers.Notifications.error(result.error));
        el.find('input.btn-primary').button('reset');
      }
    });

  }

});
