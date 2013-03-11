CreativeConstraints.Views.Instruments = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this);
    this.template = CreativeConstraints.Templates.instruments;
    this.instruments = CreativeConstraints.Data.Instruments;
    this.registerEvents();
  },

  registerEvents: function() {
    CreativeConstraints.Dispatcher.on('generateInstruments', this.generateInstruments, this);
    CreativeConstraints.Dispatcher.on('generateAll', this.generateInstruments, this);
  },

  render: function() {
    this.$el.html(this.template({
      instruments: this.generatedInstruments
    }));
  },

  generateInstruments: function() {
    this.generatedInstruments = _.shuffle(this.instruments).slice(0, rand(2, 6));
    this.render();
  }

});