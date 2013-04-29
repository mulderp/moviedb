MA.AppController = Marionette.Controller.extend({

  show: function() {
    if (MA.currentUser) {
      MA.navbar.show(new MA.Views.Items.LogoutNavbar({model: MA.currentUser}));
    }
    else
    {
      MA.navbar.show(new MA.Views.Items.LoginNavbar());
    }
    this._showGenres();
  },

  _showGenres: function() {

    var categoryNav = new MA.Navigation.Filter({
      region: MA.filter
    });

    this.listenTo(categoryNav, "genre:selected", this._categorySelected);

    categoryNav.show();

    MA.main.show(MA.composites.movies);
  },

  showMovieByGenre: function(genre){
    var movies = new MA.Controllers.MoviesLib();
    that = this;
    $.when(movies.getByCategory(genre)).then(that._showMovieList);

    Backbone.history.navigate("#movies/genres/" + genre);
  },

  _showMovieList: function(movieList){
    var moviesLib = new MA.Controllers.MoviesLib({
      region: MA.main,
      movies: movieList
    });


  },

  _categorySelected: function(genre){
    if (genre){
      this.showMovieByGenre(genre);
    } else {
      this.showInbox();
    }
  }
});
