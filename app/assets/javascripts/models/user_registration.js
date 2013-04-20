MA.Models.UserRegistration = Backbone.Model.extend({
  url: '/api/users.json',
  paramRoot: 'user',

  defaults: {
    "email": "",
    "password": "",
    "password_confirmation": ""
  }
});
