CreativeConstraints.Templates = {"instruments": function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h2>Instruments</h2>\
\
<ul class=\"instruments\">\
  ');  _(instruments).each(function(instrument) { ; __p.push('\
    <li>',  instrument ,'</li>\
  ');  }) ; __p.push('\
</ul>\
');}return __p.join('');}, "song_length": function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h2>Song Length</h2>\
<p>\
  ',  songLength ,'\
</p>');}return __p.join('');}, "tempo": function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h2>Tempo</h2>\
<p>',  tempo ,'</p>');}return __p.join('');}, "toolbar": function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<ul class=\"toolbar\">\
  <li><button class=\"generate-instruments\">Instruments</button></li>\
  <li><button class=\"generate-song-length\">Song Length</button></li>\
  <li><button class=\"generate-tempo\">Tempo</button></li>\
  <li><button class=\"generate-all\">Generate All</button></li>\
</ul>');}return __p.join('');}};