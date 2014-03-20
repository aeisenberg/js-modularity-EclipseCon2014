/*global module*/
module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-es6-module-transpiler');

	grunt.initConfig({
	  transpile: {
	    amd: {
	      type: "amd",
	      files: [{
	        expand: true,
	        cwd: 'lib/',
	        src: ['base.js', 'sub.js'],
	        dest: 'out-amd/'
	      }]
	    },
	    cjs: {
	      type: "cjs",
	      files: [{
	        expand: true,
	        cwd: 'lib/',
	        src: ['base.js', 'sub.js'],
	        dest: 'out-cjs/'
	      }]
	    }
	  }
	});
	
	grunt.registerTask("default", ["transpile"]);
};