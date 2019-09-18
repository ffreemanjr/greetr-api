(function(global, jQuery) {  //you can replace jQuery with $
  
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  Greetr.prototype = {};

  Greetr.init =function(firstName, lastName, language) {

    //Set some defaults to use if nothing is passed
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

  };

}(window, $));