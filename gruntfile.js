'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {  //configure the "grunt-contrib-clean" task, note that this line is a property on the config object, and that its configuring (by convention?) grunt-contrib-clean, ie the last word in the task, which is loaded later
            output: ['ToBeCleaned/*'] //clean all files in the directory 'ToBeCleaned'
        }

    });

    grunt.loadNpmTasks("grunt-contrib-clean"); //load 3rd party plugin from package.json

    grunt.registerTask("default", ['clean']); //map plugins to runnable commands

};
