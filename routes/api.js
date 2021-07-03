'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      /*
      { text: 'Output Text', locale: 'american-to-british' }
      { text: 'Then check Locale', locale: 'british-to-american' 
      */
      translator.translate(req.body.locale, req.body.text, function(err, translation){    
            console.log(translation);
            if(err) console.error(err);
            return res.json(translation);
          });
    });

};
