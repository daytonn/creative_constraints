CreativeConstraints.Views.Toolbar = Backbone.View.extend({

  events: {
    'click .generate-all': 'handleGenerateAllClick',
    'click .generate-instruments': 'handleGenerateInstrumentsClick',
    'click .generate-song-length': 'handleGenerateSongLengthClick',
    'click .generate-tempo': 'handleGenerateTempoClick'
  },

  initialize: function() {
    this.template = CreativeConstraints.Templates.toolbar;
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  handleGenerateAllClick: function() {
    CreativeConstraints.Dispatcher.trigger('generateAll');
  },

  handleGenerateInstrumentsClick: function() {
    CreativeConstraints.Dispatcher.trigger('generateInstruments');
  },

  handleGenerateSongLengthClick: function() {
    CreativeConstraints.Dispatcher.trigger('generateSongLength');
  },

  handleGenerateTempoClick: function() {
    CreativeConstraints.Dispatcher.trigger('generateTempo');
  }

});