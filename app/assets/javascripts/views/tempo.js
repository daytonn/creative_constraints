CreativeConstraints.Views.Tempo = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this);
    this.template = CreativeConstraints.Templates.tempo;
    this.registerEvents();
  },

  registerEvents: function() {
    CreativeConstraints.Dispatcher.on('generateTempo', this.generateTempo, this);
    CreativeConstraints.Dispatcher.on('generateAll', this.generateTempo, this);
  },

  render: function() {
    this.$el.html(this.template({
      tempo: this.generatedTempo
    }));
  },

  generateTempo: function() {
    this.generatedTempo = rand(90, 150) + ' BPM';
    this.render();
  }

});