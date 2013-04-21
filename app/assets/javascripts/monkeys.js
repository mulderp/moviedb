Backbone.Marionette.Renderer.render = function(template, data) {
	console.log(data);
  return HandlebarsTemplates[template](data);
};