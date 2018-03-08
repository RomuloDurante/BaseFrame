;(function(global, $) {
  // call the function constructor, is not necessary the keyword new
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);

    }

    Greetr.init =  function(firstname, lastname, language) {
            that = this;

            that.firstname = firstname || '';
            that.lastname = lastname || '';
            that.language = language || 'en';
    }
    //*** */
    //variables on closures
      language = ['en', 'es', 'pt']

    /********* */

    
    Greetr.prototype = {
      test: function(){ console.log('hi')}
    }




    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
  
 
