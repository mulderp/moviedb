Backbone.Marionette.Renderer.render = function(template, data) {
  return HandlebarsTemplates[template](data);
};