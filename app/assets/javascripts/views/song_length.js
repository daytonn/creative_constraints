CreativeConstraints.Views.SongLength = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this);
    this.template = CreativeConstraints.Templates.song_length;
    this.registerEvents();
  },

  registerEvents: function() {
    CreativeConstraints.Dispatcher.on('generateSongLength', this.generateSongLength, this);
    CreativeConstraints.Dispatcher.on('generateAll', this.generateSongLength, this);
  },

  render: function() {
    this.$el.html(this.template({
      songLength: this.generatedSongLength
    }));
  },

  generateSongLength: function() {
    this.generatedSongLength = rand(2, 6) + ':' + [15, 30, 45][rand(0, 2)];
    this.render();
  }

});