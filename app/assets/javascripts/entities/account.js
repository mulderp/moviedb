MA.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

  Entities.Account = Backbone.Model.extend({
	    urlRoot: '/api/account',
	    parse: function(data) {
		  console.log(data);
		  return data.movies;
	}
  });

 var API = {
    getAccount: function(callback) {
	  var account = new Entities.Account();
	  account.fetch({success: callback});
      return account;
     },
  };

  MA.reqres.setHandler("movies:mymovies", function(callback) {
    return API.getAccount(callback);
  });
});
