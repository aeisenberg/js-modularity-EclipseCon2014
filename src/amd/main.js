/*global console require */
require.config({
    baseUrl: '.',
    paths: {
        'jquery': 'https://code.jquery.com/jquery-2.1.0.min',
		// loads text files as dependencies
		'text': 'https://raw.github.com/requirejs/text/latest/text'
    }
  });


console.log('Outside main!');
require(['jquery', 'scripts/sub1', 'scripts/sub2', 'text!scripts/template.html'], 
		function($, sub1, sub2, template) {
	console.log('In main!');
	console.log(sub1);
	console.log(sub2());
	$('body').append(template);
});