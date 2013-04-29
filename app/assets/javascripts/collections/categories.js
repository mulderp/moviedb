MA.Collections.Categories = Backbone.Collection.extend({
});

MA.addInitializer(function() {
  MA.Collections.Movies.model = MA.Models.Category;
})
