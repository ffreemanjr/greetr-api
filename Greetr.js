(function(global, jQuery) {  //you can replace the name jQuery with '$'
  
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  var supportedLangs = ['en', 'es'];

  greetings = {

  };

  formalGreetings = {
    

  };

  Greetr.prototype = {};

  Greetr.init = function(firstName, lastName, language) {

    //Set some defaults to use if nothing is passed
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;

}(window, $));