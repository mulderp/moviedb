Handlebars.registerHelper('liststars', function(context, block) {
  var ret = "";

  for(var i=0, j=context; i<j; i++) {
    ret = ret + "<i class='icon-star'></i>";
  }
  for(var i=0, j=5-context; i<j; i++) {
    ret = ret + "<i class='icon-star-empty'></i>";
  }

  return ret;
});