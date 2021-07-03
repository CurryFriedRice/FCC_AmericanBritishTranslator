const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')


function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

function updateString(_text, _target, _update, _index){
  
  let retVal = _text;
  
  if((_target + ".") == _update || _target == (_update + ".") )
    {

       if(_update.includes(".")){
         //So if our update has the '.' in it we're going from british to american
         //so we need to check to see if there's a . at the end
         console.log("Updating From EU to US");
         if(_text.charAt(_index+_target.length) == ".") console.log("it's a potato");
         else{
         let update = '<span class="highlight">' + _update.charAt(0).toUpperCase() + _update.substr(1) + '</span>';
         //console.log(_text);
         retVal = _text.substr(0, _index)+ update +" "+_text.substr(_index+_update.length);
         //console.log(retVal);
         }
       }
       else{
         console.log("Updating From US to EU");
         
         let update = '<span class="highlight">' + _update.charAt(0).toUpperCase() + _update.substr(1) + '</span>';
         //console.log(_text);
         retVal = _text.substr(0, _index)+ update +_text.substr(_index+_update.length+1);
         //console.log(retVal);
       }

     return retVal;
    }
  else if((_index == 0 || _text.charAt(_index-1) == ' ') && 
    ( _index + _target.length ==_text.length || _text.charAt(_index + _target.length) =='.' ||  _text.charAt(_index + _target.length) == ' '))
    {
      console.log('updating string | ' + _target + " to " + _update);
      //retVal = _text.substr(0, _index);
      //let update = _text.substr(_index);
         
      let update = '<span class="highlight">' + _update + '</span>';

      //update = update.replace(_target, '<span class="highlight">' + _update  + '</span>');
      retVal = _text.substr(0, _index) + update +_text.substr(_index+_target.length);
      //retVal = retVal + update;
      console.log(retVal);
      return retVal;//_text.replace(key, '<span class="highlight">' + validText[key] + '</span>');
    }
    
    else{ 
      console.log('not going to write ' + _target + " into " + _update);
      return _text;
    }
}

class Translator {

  translate(_locale, _text, done){
    if(typeof _locale == typeof undefined || typeof _text == typeof undefined)done(null, {error: 'Required field(s) missing'});
    if(_text == ''){done(null,{ error: 'No text to translate' })}

    

    let americanTimeRegEx = /([01]?[0-9]|2[0-3]):[0-5][0-9]/g;
    let britishTimeRegEx = /([01]?[0-9]|2[0-3])\.[0-5][0-9]/g;
    let validText, spellings, titles;
    switch(_locale){
        case 'american-to-british':
          spellings = americanToBritishSpelling;
          titles = americanToBritishTitles;
          validText = [americanOnly, spellings, titles];
          this.convert(_text, validText, americanTimeRegEx, done);
          break;
        case 'british-to-american':
          spellings = swap(americanToBritishSpelling);
          titles = swap(americanToBritishTitles);
          validText = [britishOnly ,spellings, titles];
          this.convert(_text, validText, britishTimeRegEx, done);
          break;
        default:
          done(null, { error: 'Invalid value for locale field' });
          break;
    }
  }


  
  convert(_text, _validText, _timeRegEx, done){
    //console.log("potato");
    let retVal = _text;

  
    _validText.forEach(function(validText){
      let index = 0;
      let compKeys = Object.keys(validText);
      let listOfWords =[];
      compKeys.forEach(function(key){
        if(retVal.toLocaleLowerCase().includes(key)) listOfWords.push(key);
      });
      console.log(listOfWords);
      listOfWords.forEach(function(word){
        let offset = 0;
        while(retVal.toLocaleLowerCase().includes(word, index+offset))
          {
            //console.log(index + " | " + word);
            index = retVal.toLocaleLowerCase().indexOf(word);
            let check = updateString(retVal, word, validText[word], index); 
            if(retVal === check) offset++;
            else retVal = check;
            //retVal = retVal.replace(key, '<span class="highlight">' + validText[key] + '</span>');
          }
      });
    });
    
    /*
   //This should be that language only
    let compKeys = Object.keys(_validText[0]);
    compKeys.forEach(function(key){
    while(retVal.includes(key)){
        retVal = retVal.replace(key, '<span class="highlight">' + validText[key] + '</span>');
      }
    });
    
    //This should be spellings for words.
    let compKeys = Object.keys(_validText[1]);
    compKeys.forEach(function(key){
    while(retVal.includes(key)){
        retVal = retVal.replace(key, '<span class="highlight">' + validText[key] + '</span>');
      }
    });

    //this should be honorifics.
    let compKeys = Object.keys(_validText[2]);
    let index = 0;
    

    */
    //console.log(retVal);
    //Time Conversion...
    
    //console.log(timeRegEx.test(retVal));
    while(_timeRegEx.test(retVal)){
      let timeIndex = retVal.search(_timeRegEx);
      let replacementTime = retVal.slice(timeIndex,timeIndex+5);
      if(replacementTime.includes(':'))replacementTime = replacementTime.replace(":",".");      
      else if(replacementTime.includes('.')) replacementTime = replacementTime.replace(".",":");      
      retVal = retVal.replace(_timeRegEx, '<span class="highlight">' + replacementTime+ '</span>');
    }
    
    retVal = retVal.charAt(0).toUpperCase() + retVal.substr(1); 
    if(retVal === _text )
      retVal = {text: _text, translation: "Everything looks good to me!"};
    else{
      retVal = {text: _text, translation: retVal};
    }
    console.log(retVal);
    //console.log(retVal);
    done(null, retVal);
  }
 
}

module.exports = Translator;