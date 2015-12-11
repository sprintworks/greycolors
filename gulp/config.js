/*-------------------------------------------------------------------
Paths
-------------------------------------------------------------------*/

module.exports = {
  basePaths : {
    assets: {
      dist: './dist/'
    },
    vendor: {
      base: './js/vendor/',
    },
    scripts: {
      base: './assets/js/',
      dist: './build/',
    },
    bowerjs: {
      base: './bower_components/',
    },
    npm: {
      base: './node_modules/',
    },
    fonts: {
      src: './assets/fonts/'
    },
    scss: {
      src: './assets/scss/**/*.{sass,scss}',
      base: './assets/scss/',
      dist: './build/',
    },
    html: {
      base: './src/',
      dist: './build/'
    },
    images: {
      src: './assets/images/**/*.{png,jpg}',
      base: './assets/images/',
      dist: './assets/images/'
    }
  }
};