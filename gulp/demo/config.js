var project           = 'selectize.label';
var src               = 'src/demo';
var build             = 'demo';
var development       = 'demo/development';
var production        = 'demo/production';
var srcAssets         = 'src/demo/_assets';
var developmentAssets = 'demo/assets';
var productionAssets  = 'demo/production/assets';
var tar               = 'tar';

module.exports = {
  project: {
    project
  },
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src],
        routes: {
          '/bower_components': 'bower_components',
          '/src': 'src'
        }
      },
      port: 9000,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9001
    }
  },
  delete: {
    src: [developmentAssets]
  },
  styles: {
    src:  [srcAssets + '/less/rem.less', srcAssets + '/less/demo.less'],
    filter:{
      rem: ['**', '!**/rem.css']
    },
    dest: developmentAssets + '/css',
    options: {
      autoprefixer: {
        browsers: [
          'Android >= 4',
          'Chrome >= 40',
          'last 6 Firefox versions',
          'iOS >= 6',
          'Safari >= 6'
        ],
        cascade: true
      }
    }
  },
  images: {
    development: {
      filter: '**/im**/*.{png,svg,jpg,jpeg,gif}',
      src: srcAssets + '/images/**/*',
      dest: developmentAssets + '/images'
    },
    production: {
      filter: '**/im**/*.{png,svg,jpg,jpeg,gif}',
      src: developmentAssets + '/images/**/*',
      dest: productionAssets + '/images'
    }
  },
  iconfont: {
    fontname: 'iconfont-xmdd',
    formats:['svg', 'ttf', 'eot', 'woff', 'woff2'],
    iconfontCss: {
      path: 'less',
      targetPath: '../less/_icons.less',
      fontPath: '../fonts/'
    },
    development: {
      src: srcAssets + '/icons/*.svg',
      dest: srcAssets + '/fonts/'
    },
    files: [srcAssets + '/less/_icons.less', srcAssets + '/fonts/**/*']
  },
  scripts: {
    src:  srcAssets + '/scripts/**/*',
    dest: developmentAssets + '/scripts'
  },
  fonts: {
    development: {
      filter: '**/*.{eot,svg,ttf,woff,woff2}',
      src:  srcAssets + '/fonts/**',
      dest: developmentAssets + '/fonts'
    },
    production: {
      filter: '**/*.{eot,svg,ttf,woff,woff2}',
      src: [developmentAssets + '/fonts/**'],
      dest: productionAssets + '/fonts'
    }
  },
  html: {
    development: {
      useref: {
        searchPath: [developmentAssets, src , '.']
      },
      jsfilter: ['**', '!**/main*.js'],
      cssfilter: ['**/*.css'],
      src:  src + '/**/*.html',
      dest: development
    },
    production: {
      useref: {
          searchPath: [build, src, '.' ]
      },
      jsfilter: ['**', '!**/main*.js'],
      cssfilter: ['**/*.css'],
      cssUrlReplace: {
        regExps:[/..\/img\//],
        newPath: '../images/'
      },
      src:  development + '/**/*.html',
      dest: production
    }
  },
  clean: {
    development: {
      files: [build, tar]
    },
    production: {
      files: [production, tar]
    }
  },
  build: {
    development: {
      src: build
    },
    production: {
      src: [development, developmentAssets]
    }
  },
  lint: {
    scripts: srcAssets + '/scripts/**/*.js'
  },
  watch: {
    less:  srcAssets + '/less/**/*.less',
    scripts: srcAssets + '/scripts/**/*.js',
    images: srcAssets + '/images/**/*',
    fonts: srcAssets + '/fonts/**/*',
    html: src + '/**/*.html'
  },
  wiredep: {
    src: src + '/**/*.html',
    dest: src
  },
  extras: {
    development: {
      src: [src + '/**/*.*', '!'+ src + '/*.html', '!' + srcAssets + '/**/*.*'],
      dest: development,
      resources: {
        src: [srcAssets + '/**/*.*', '!'+ srcAssets + '/less/**', '!'+ srcAssets + '/images/**', '!'+ srcAssets + '/scripts/**', '!'+ srcAssets + '/fonts/**', '!'+ srcAssets + '/**/.*'],
        dest: developmentAssets
      }
    },
    production: {
      src: [development + '/**/*', '!'+ development + '/*.html'],
      dest: production,
      resources: {
        src: [developmentAssets + '/**/*.*', '!'+ developmentAssets + '/css/**', '!'+ developmentAssets + '/images/**', '!'+ developmentAssets + '/scripts/**', '!'+ developmentAssets + '/fonts/**', '!'+ developmentAssets + '/**/.*'],
        dest: productionAssets
      }
    }
  },
  tar: {
    name: project + '.tar',
    production: {
      src: production + '/**',
      dest: tar
    }
  }
};
