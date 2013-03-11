(function() {

  CreativeConstraints.Router = Backbone.Router.extend({
    routes: {
      '*actions': 'default'
    },

    default: function() {
      $('body').on('keyup', dispatchHotkey);
      var toolbar = new CreativeConstraints.Views.Toolbar({
        el: '#toolbar'
      });

      var instrumentsView = new CreativeConstraints.Views.Instruments({
        el: '#instruments'
      });

      var songLengthView = new CreativeConstraints.Views.SongLength({
        el: '#song-length'
      });

      var tempoView = new CreativeConstraints.Views.Tempo({
        el: '#tempo'
      });
    }
  });

  new CreativeConstraints.Router();
  Backbone.history.start();

  function dispatchHotkey(e) {
    console.log(e.keyCode);
    CreativeConstraints.Dispatcher.trigger('keypress:' + e.keyCode);
  }

})();