module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('server', 'Starting server', function (done) {
      grunt.log.write('Preparing server to start');
      require('./server.js');
    });

    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    use: [
                        require('yeticss'),
                        require('autoprefixer-stylus')
                    ]
                },

                files: {
                    'public/css/app.css': ['styl/main.styl']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/css',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            build: {
                files: ['styl/**', 'assets/**'],
                tasks: ['build'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('build', ['stylus', 'cssmin']);
    grunt.registerTask('serve', ['server', 'build', 'watch']);
    grunt.registerTask('default', ['build']);
};
