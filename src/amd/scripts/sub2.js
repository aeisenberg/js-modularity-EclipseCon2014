console.log('Outside sub2!'); // Naughty! Don't put code application code in global scope
define(['jquery'], function($) {
       console.log('In sub2!');
       return function() { 
              return 'Modules can return functions, too!'; 
       };
});