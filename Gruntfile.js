module.exports = function(grunt) {
    grunt.initConfig({
        jshint : {
            files : ['homerun-api/src/**/**.*js'],
            options: {
                'esversion': 8,
            }
        },
        watch : {
            files : ['homerun-api/src/**/**.*js'],
            tasks : ['jshint']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
}