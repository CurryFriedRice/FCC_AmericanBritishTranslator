const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {/*
  suite("American to British", () =>{
    let locale = 'american-to-british';
      
    test('Mangoes are my favorite fruit.', function(){
      let message = "Mangoes are my favorite fruit.";
      let expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      let error = "ERROR";
      let result; 
      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      //console.log(result);
      assert.equal(result['translation'], expected, error);
    });


  test('I ate yogurt for breakfast.', function(){
      let message = "I ate yogurt for breakfast.";
      let expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      let error = "ERROR";

      let result; 
      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      //console.log(result);
      assert.equal(result['translation'], expected, error);
    });

  test("We had a party at my friend's condo.", function(){
      let message = "We had a party at my friend's condo.";
      let expected = "We had a party at my friend's <span class=\"highlight\">flat</span>.";
      let error = "ERROR"
      
      let result; 
      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      //console.log(result);
      assert.equal(result['translation'], expected, error);
    });

  test('Can you toss this in the trashcan for me?', function(){
      let message = "Can you toss this in the trashcan for me?";
      let expected = 'Can you toss this in the <span class="highlight">rubbish</span>can for me?';
      let error = "ERROR";
    
      let result; 
      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      //console.log(result);
      assert.equal(result['translation'], expected, error);
    });

  test('The parking lot was full.', function(){
      let message = "The parking lot was full.";
      let expected = 'The <span class="highlight">car park</span> was full.';
      let error = "ERROR";
      
      let result; 
      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      //console.log(result);
      assert.equal(result['translation'], expected, error);
    });

  test('Like a high tech Rube Goldberg machine.', function(){
      let message = "Like a high tech Rube Goldberg machine.";
      let expected = "Everything looks good to me!";
      let error = "ERROR";
     
      let result; 
      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      //console.log(result);
      assert.equal(result['translation'], expected, error);
    });

  test('To play hooky means to skip class or work.', function(){
      let message = "To play hooky means to skip class or work.";
      let expected = 'To <span class="highlight">bunk off</span> means to skip class or work.';
      let error = "ERROR";
      
      let result; 
      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      //console.log(result);
      assert.equal(result['translation'], expected, error);
    });

  test('No Mr. Bond, I expect you to die.', function(){
      let message = "No Mr. Bond, I expect you to die.";
      let expected = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
      let error = "ERROR";
    
      let result; 
      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      //console.log(result);
      assert.equal(result['translation'], expected, error);
    });

  test('Dr. Grosh will see you now.', function(){
      let message = "Dr. Grosh will see you now.";
      let expected = '<span class="highlight">Dr</span> Grosh will see you now.';
      let error = "ERROR";

      let result; 
      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      
        assert.equal(result['translation'], expected, error);

  });
  
  test('Lunch is at 12:15 today.', function(){
      let message = "Lunch is at 12:15 today.";
      let expected = 'Lunch is at <span class="highlight">12.15</span> today.';
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

    test('Lunch is at 12:15 today.', function(){
      let message = "Lunch is at 12:15 today.";
      let expected = 'Lunch is at <span class="highlight">12.15</span> today.';
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

  });
    //==========//
    //==========//
  suite("British to American", () =>{
    let locale = 'british-to-american';


    test('Paracetamol takes up to an hour to work.', function(){
      let message = "Paracetamol takes up to an hour to work.";
      let expected = "EXPECTED"
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

    test('First, caramelise the onions.', function(){
      let message = "First, caramelise the onions.";
      let expected = 'First, <span class="highlight">caramelize</span> the onions.';
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

    test('I spent the bank holiday at the funfair.', function(){
      let message = 'I spent the bank holiday at the funfair.';
      let expected = 'Everything looks good to me!';
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

    test('I had a bicky then went to the chippy.', function(){
      let message = "Mangoes are my favorite fruit.";
      let expected = "EXPECTED"
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

    test("I've just got bits and bobs in my bum bag.", function(){
      let message = "Mangoes are my favorite fruit.";
      let expected = "EXPECTED"
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

        test('The car boot sale at Boxted Airfield was called off.', function(){
      let message = "Mangoes are my favorite fruit.";
      let expected = "EXPECTED"
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

        test('Have you met Mrs Kalyani?', function(){
      let message = "Mangoes are my favorite fruit.";
      let expected = "EXPECTED"
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

        test("Prof Joyner of King's College, London.", function(){
      let message = "Mangoes are my favorite fruit.";
      let expected = "EXPECTED"
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

        test('Tea time is usually around 4 or 4.30.', function(){
      let message = "Mangoes are my favorite fruit.";
      let expected = "EXPECTED"
      let error = "ERROR";
      let result; 

      translator.translate(locale, message, function(err, translation){
        if(err) console.error(err);
        result = translation;
      });    
      assert.equal(result['translation'], expected, error);

    });

    
  });*/
});
