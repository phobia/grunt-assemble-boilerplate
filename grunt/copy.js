module.exports = {
    scripts: {
        expand: true,
        cwd: '<%= srcPath %>/js/',
        src: ['**'],
        dest: '<%= buildPath %>/js/'
    },
    images: {
        expand: true,
        cwd: '<%= srcPath %>/img/',
        src: ['**'],
        dest: '<%= buildPath %>/img/'
    },
    less: {
        expand: true,
        cwd: '<%= srcPath %>/less/',
        src: ['**'],
        dest: '<%= buildPath %>/less/'
    }
}