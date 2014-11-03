module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: "\n\n"
      },
      dist: {
        src: [
          'src/main.js'
        ],
        dest: '<%= pkg.name %>.js'
      }
    },

    mochaTest: {
      test: {
        src: ['test/**/*.js']
      }
    },

    watch: {
      files: ['<%%= jshint.files %>'],
      tasks: ['concat', 'jshint', 'qunit']
    }

  });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['concat', 'mochaTest']);
  grunt.registerTask('default', ['concat'])

};