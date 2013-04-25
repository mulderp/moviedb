MA.Models.Movie = Backbone.Model.extend({

    toJSON: function() {
	  json = _.clone(this.attributes);
	  return _.extend(json, {editable: this.editable()});
    },
	editable: function() {
		return MA.currentUser != undefined;
	}

});
