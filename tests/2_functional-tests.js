const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  
  test("Translation with text and locale fields: POST request to /api/translate", function(done){
    let formData = {locale: "american-to-british", text: "Mangoes are my favorite fruit."};
    chai
      .request(server)
      .post("/api/translate")
      .type('form')
      .send(formData)
      .end(function (err, res){
        assert.equal(res.status, 200);
        assert.isOk(res.body, "ERROR");
        done();
      });
 
  });

  test("Translation with text and invalid locale field: POST request to /api/translate", function(done){
     let formData = {locale: "INVALID", text: "Mangoes are my favorite fruit."};
     chai
      .request(server)
      .post("/api/translate")
      .type('form')
      .send(formData)
      .end(function (err, res){
        assert.equal(res.status, 200);
        assert.isOk(res.body, "ERROR");
        assert.deepEqual(res.body,{ error: 'Invalid value for locale field' }, "ERROR");
        done();
      });
 
  });

  test("Translation with missing text field: POST request to /api/translate", function(done){
       let formData = {locale: "INVALID"};
      chai
      .request(server)
      .post("/api/translate")
      .type('form')
      .send(formData)
      .end(function (err, res){
        assert.equal(res.status, 200);
        assert.isOk(res.body, "ERROR");
        assert.deepEqual(res.body,{error: 'Required field(s) missing'}, "ERROR");
        done();
      });
  });

  test("Translation with missing locale field: POST request to /api/translate", function(done){
      let formData = { text: "Mangoes are my favorite fruit."};
      chai
      .request(server)
      .post("/api/translate")
      .type('form')
      .send(formData)
      .end(function (err, res){
        assert.equal(res.status, 200);
        assert.isOk(res.body, "ERROR");
        assert.deepEqual(res.body,{error: 'Required field(s) missing'}, "ERROR");
        done();
      });
  });

  test("Translation with empty text: POST request to /api/translate", function(done){
      let formData = {locale: "INVALID", text: ""}; 
      chai
      .request(server)
      .post("/api/translate")
      .type('form')
      .send(formData)
      .end(function (err, res){
        assert.equal(res.status, 200);
        assert.isOk(res.body, "ERROR");
        assert.deepEqual(res.body,{ error: 'No text to translate' }, "ERROR");
        done();
      });
  });

  test("Translation with text that needs no translation: POST request to /api/translate", function(done){
    let formData = {locale: "british-to-american", text: "Mangoes are my favorite fruit."};
     chai
      .request(server)
      .post("/api/translate")
      .type('form')
      .send(formData)
      .end(function (err, res){
        assert.equal(res.status, 200);
        assert.isOk(res.body, "ERROR");
        assert.deepEqual(res.body, {text: formData['text'], translation: "Everything looks good to me!"}, "ERROR");
        done();
      });
 
  });

});
