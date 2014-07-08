/*

TO DO
==============
Implement CSSmin instead of Compass compressed
Rename produciton.js and remove uncompreseed version

*/

module.exports = function(grunt) {

  // load all grunt tasks
  
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),



      // Compass
      compass: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          imagesDir: 'images',
        },
        dist: {
          options: {
            outputStyle: 'compressed'
          }
        },
        dev: {
          options: {
            outputStyle: 'expanded'
          }
        }
      },

      clean: {
        build: {
          src: ['build']
        }
      },


      //Concat JS files
      concat: {
        dist: {
          files: {
            'build/javascripts/cambridge/cambridge.js': ['javascripts/cambridge/*.js'],
          },
        }
      },


      // Minifiy CSS
      cssmin: {
        minify: {
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css/',
          ext: '.css'
        }
      },


      // Uglify JS
      uglify: {
        options:{
          mangle: false
        },
        dist: {
          files: {
            'build/javascripts/vendor/custom.modernizr.js': 'javascripts/vendor/custom.modernizr.js',
            'build/javascripts/vendor/jquery.js': 'javascripts/vendor/jquery.js',
            'build/javascripts/vendor/zepto.js': 'javascripts/vendor/zepto.js',

            'build/javascripts/foundation/foundation.js': 'javascripts/foundation/foundation.js',
            'build/javascripts/foundation/foundation.tooltips.js': 'javascripts/foundation/foundation.tooltips.js',
            'build/javascripts/foundation/foundation.reveal.js': 'javascripts/foundation/foundation.reveal.js',
            'build/javascripts/foundation/foundation.section.js': 'javascripts/foundation/foundation.section.js',

            'build/javascripts/cambridge/cambridge.js': 'build/javascripts/cambridge/cambridge.js',
            
          }
        }
      },


      // Image compression
      imagemin: {
        static: {                        
          options: {                       
            optimizationLevel: 6
          }
        },
        dynamic: {
          files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: 'build/images'
          }]
        }
      },

      // Copy files to the build folder ready for upload
      copy: {
        main: {
          src: [
            '*.html',
            'fonts/*',
            'javascripts/galleria/themes/**/*',
            'javascripts/flowplayer/**/*'
          ],
          dest: 'build/',
        },
      },




    // Watch + Livereload
    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['compass:dev']
    },

    livereload: {
      files: ['*.html', 'sass/**/*.scss', 'css/*.css', 'images/*', 'javascripts/**/*.js'],
        options: {
          livereload: true
        }
      },
    }

  });



  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');



   // Deploy task
  grunt.registerTask('deploy', [
      'clean', 'cssmin', 'concat', 'uglify', 'imagemin', 'copy'
   ]);

  

  // Default task
    grunt.registerTask('default', [
      'compass:dev' ,'watch'
   ]);

}