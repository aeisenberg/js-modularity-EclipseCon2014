console.log('Outside sub1!'); // Naughty! Don't put code application code in global scope
define(['jquery'], function($) {
       console.log('In sub1!');
       return 'I am the value of the module';
});