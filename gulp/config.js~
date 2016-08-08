var project           = 'xmdd-jsbridge';
var src               = 'src/core';
var dist              = 'dist';
var build             = 'build';
var tar               = 'tar';

module.exports = {
  project: {
    project
  },
  browsersync: {
    development: {
      server: {
        baseDir: [build, src],
        routes: {
          '/bower_components': 'bower_components'
        }
      },
      port: 9000,
      files: [
        build + '/css/*.css',
        build + '/js/*.js',
        build + '/images/**',
        build + '/fonts/*'
      ]
    },
    production: {
      server: {
        baseDir: [dist]
      },
      port: 9001
    }
  },
  delete: {
    src: [build, dist]
  },
  styles: {
    development: {
      src:  [src + '/less/xmdd-jsbridge.less'],
      filter:{
        rem: ['**', '!**/rem.css']
      },
      dest: build + '/css',
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
    production: {
      src:  [build + '/css/**.css'],
      dest: dist + '/css',
      cssUrlReplace: {
        regExps:[/..\/img\//],
        newPath: '../images/'
      }
    }
  },
  images: {
    development: {
      filter: '**/im**/*.{png,svg,jpg,jpeg,gif}',
      src: src + '/images/**/*',
      dest: build + '/images'
    },
    production: {
      filter: '**/im**/*.{png,svg,jpg,jpeg,gif}',
      src: build + '/images/**/*',
      dest: dist + '/images'
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
      src: src + '/icons/*.svg',
      dest: build + '/fonts/'
    },
    files: [src + '/less/_icons.less', src + '/fonts/**/*']
  },
  scripts: {
    development: {
      src:  src + '/js/**/*',
      dest: build + '/js'
    },
    production: {
      src:  build + '/js/**/*',
      dest: dist + '/js'
    }
  },
  fonts: {
    development: {
      filter: '**/*.{eot,svg,ttf,woff,woff2}',
      src:  src + '/fonts/**',
      dest: build + '/fonts'
    },
    production: {
      filter: '**/*.{eot,svg,ttf,woff,woff2}',
      src: [build + '/fonts/**'],
      dest: dist + '/fonts'
    }
  },
  html: {
    development: {
      useref: {
        searchPath: [build, src , '.']
      },
      jsfilter: ['**', '!**/main*.js'],
      cssfilter: ['**/*.css'],
      src:  src + '/**/*.html',
      dest: build
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
      src:  build + '/**/*.html',
      dest: dist
    }
  },
  clean: {
    development: {
      files: [build, dist, tar]
    },
    production: {
      files: [dist, tar]
    }
  },
  build: {
    development: {
      src: src
    },
    production: {
      src: build
    }
  },
  lint: {
    scripts: src + '/js/**/*.js'
  },
  watch: {
    less:  src + '/less/**/*.less',
    scripts: src + '/js/**/*.js',
    images: src + '/images/**/*',
    fonts: src + '/fonts/**/*',
    html: src + '/**/*.html'
  },
  wiredep: {
    src: src + '/**/*.html',
    dest: src
  },
  extras: {
    development: {
      src: [src + '/**/*.*', '!'+ src + '/less/**', '!'+ src + '/images/**', '!'+ src + '/js/**', '!'+ src + '/fonts/**', '!'+ src + '/**/.*'],
      dest: build
    },
    production: {
      src: [build + '/**/*.*', '!'+ build + '/css/**', '!'+ build + '/images/**', '!'+ build + '/js/**', '!'+ build + '/fonts/**', '!'+ build + '/**/.*'],
      dest: dist
    }
  },
  tar: {
    name: project + '.tar',
    production: {
      src: dist + '/**',
      dest: tar
    }
  }
};
