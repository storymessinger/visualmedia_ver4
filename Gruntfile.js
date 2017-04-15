module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'srcs/',
                src: ['*.{png,jpg,gif}'],
                dest: 'results/'
                }]
            }
        },
    responsive_images: {
            dev: {
                options: {
                    engine: 'gm',
                    newFilesOnly: true,
                    rename: false,
                    sizes: [
                        {
                            width: 300
                        }
                    ]
                },
                files: [
                    // Partners, Downloads, Project, Publication 제외
                    {
                        // Issues
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Contents/Issues/img/', 
                        dest: 'src/assets/Contents/Issues/smallimg/'
                    },
                    {
                        // Lifes
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Contents/Lifes/img/', 
                        dest: 'src/assets/Contents/Lifes/smallimg/'
                    },
                    {
                        // People
                        expand:true,
                        src: ['*.{jpg,gif,png}'],
                        cwd: 'src/assets/Contents/People/img/', 
                        dest: 'src/assets/Contents/People/smallimg/'
                    },
                ]
            }
        
        },
        
    });
    
    grunt.registerTask('default', [
    ]);
    grunt.registerTask('res', [
    'responsive_images'
    ]);
};

