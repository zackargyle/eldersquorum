module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: [
          'bower_components/angular/*.min.js',
          'bower_components/angular-cookies/*.min.js',
          'bower_components/angular-route/*.min.js',
          'app/scripts/*.js', 'app/*.js',
          'app/views/**/*.js', 'app/components/**/*.js'
        ],
        dest: 'dest/js/concat.js'
      },
      css: {
        src: ['app/index.css', 'app/views/**/*.css', 'app/components/**/*.css'],
        dest: 'dest/css/concat.css'
      }
    },
    uglify: {
      js: {
        src: 'dest/js/concat.js',
        dest: 'dest/js/concat.min.js'
      }
    },
    cssmin: {
      css:{
        src: 'dest/css/concat.css',
        dest: 'dest/css/concat.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);

};