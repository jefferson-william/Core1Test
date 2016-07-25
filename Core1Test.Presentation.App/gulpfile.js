'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    csslint = require('gulp-csslint'),
    cssnano = require('gulp-cssnano'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    minifyCshtml = require('gulp-minify-cshtml'),
    mocha = require('gulp-mocha-phantomjs'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    size = require('gulp-size'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    merge = require('merge-stream'),
    psi = require('psi'),
    rimraf = require('rimraf'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    tslint = require('gulp-tslint'),
    typescript = require('gulp-typescript'),
    config = require('./config.json'),
    hosting = require('./hosting.json'),
    project = require('./project.json'),
    sequence = require('gulp-sequence'),
    jscs = require('gulp-jscs'),
    browserSync = require('browser-sync').create(),
    $ = require('gulp-load-plugins');

var extAll = '{js,html,css,png,jpg,gif}';
var environment = {
    development: 'Development',
    staging: 'Staging',
    production: 'Production',
    current: function () {
        return process.env.ASPNET_ENVIRONMENT || process.env.ASPNET_ENV || this.development;
    },
    isDevelopment: function () {
        return this.current() === this.development;
    },
    isStaging: function () {
        return this.current() === this.staging;
    },
    isProduction: function () {
        return this.current() === this.production;
    }
};

var siteUrl = undefined;

var paths = {
    bower: './bower_components/',
    scripts: 'Scripts/',
    styles: 'Styles/',
    views: 'Views/',
    tests: 'Tests/',

    // Destination Directory Paths
    wwwroot: './' + hosting.webroot + '/',
    css: './' + hosting.webroot + '/css/',
    fonts: './' + hosting.webroot + '/fonts/',
    img: './' + hosting.webroot + '/img/',
    js: './' + hosting.webroot + '/js/',
    partials: './' + hosting.webroot + '/partials/'
};

var typeScriptProjects = [];
function getTypeScriptProject(name) {
    var item;
    typeScriptProjects.forEach(function (typeScriptProject) {
        if (typeScriptProject.name === name) {
            item = typeScriptProject;
        }
    });
    if (item === undefined) {
        var typeScriptProject = typescript.createProject('tsconfig.json');
        item = {
            name: name,
            project: typeScriptProject
        };
        typeScriptProjects.push(item);
    }
    return item.project;
}

var sources = {
    css: [
        {
            name: "angular-material.css",
            concat: true,
            paths: [
                paths.bower + "angular-material-sass-files/components/_autocomplete.scss",
                paths.bower + "angular-material-sass-files/components/_backdrop.scss",
                paths.bower + "angular-material-sass-files/components/_bottom-sheet.scss",
                paths.bower + "angular-material-sass-files/components/_button.scss",
                paths.bower + "angular-material-sass-files/components/_card.scss",
                paths.bower + "angular-material-sass-files/components/_checkbox.scss",
                paths.bower + "angular-material-sass-files/components/_chips.scss",
                paths.bower + "angular-material-sass-files/components/_content.scss",
                paths.bower + "angular-material-sass-files/components/_calendar.scss",
                paths.bower + "angular-material-sass-files/components/_datepicker.scss",
                paths.bower + "angular-material-sass-files/components/_dialog.scss",
                paths.bower + "angular-material-sass-files/components/_divider.scss",
                paths.bower + "angular-material-sass-files/components/_fabSpeedDial.scss",
                paths.bower + "angular-material-sass-files/components/_fabToolbar.scss",
                paths.bower + "angular-material-sass-files/components/_grid-list.scss",
                paths.bower + "angular-material-sass-files/components/_icon.scss",
                paths.bower + "angular-material-sass-files/components/_input.scss",
                paths.bower + "angular-material-sass-files/components/_list.scss",
                paths.bower + "angular-material-sass-files/components/_menu.scss",
                paths.bower + "angular-material-sass-files/components/_menu-bar.scss",
                paths.bower + "angular-material-sass-files/components/_progress-circular.scss",
                paths.bower + "angular-material-sass-files/components/_progress-linear.scss",
                paths.bower + "angular-material-sass-files/components/_radio-button.scss",
                paths.bower + "angular-material-sass-files/components/_select.scss",
                paths.bower + "angular-material-sass-files/components/_sidenav.scss",
                paths.bower + "angular-material-sass-files/components/_slider.scss",
                paths.bower + "angular-material-sass-files/components/_sticky.scss",
                paths.bower + "angular-material-sass-files/components/_subheader.scss",
                paths.bower + "angular-material-sass-files/components/_switch.scss",
                paths.bower + "angular-material-sass-files/components/_tabs.scss",
                paths.bower + "angular-material-sass-files/components/_toast.scss",
                paths.bower + "angular-material-sass-files/components/_toolbar.scss",
                paths.bower + "angular-material-sass-files/components/_tooltip.scss",
                paths.bower + "angular-material-sass-files/components/_virtual-repeater.scss",
                paths.bower + "angular-material-sass-files/components/_whiteframe.scss",
                paths.bower + "angular-material-sass-files/components/_layout.scss"
            ]
        },
        {
            name: "site.css",
            paths: [
                paths.styles + "site.scss"
            ]
        },
        {
            name: "All",
            paths: [
                paths.styles + "**/*.scss"
            ]
        }
    ],
    fonts: [
        {
            name: "Roboto",
            path: paths.fonts + "*.{ttf,svg,woff,woff2,otf,eot}"
        },
        {
            name: "bootstrap",
            path: paths.bower + "bootstrap-sass/**/*.{ttf,svg,woff,woff2,otf,eot}"
        },
        {
            name: "font-awesome",
            path: paths.bower + "font-awesome/**/*.{ttf,svg,woff,woff2,otf,eot}"
        }
    ],
    img: [
        paths.img + "**/*.{png,jpg,jpeg,gif,svg}"
    ],
    ts: [
        {
            name: "All",
            paths: [
                paths.scripts + "**/*.ts",
            ]
        }
    ],
    js: [
        {
            name: "angular.js",
            paths: [
                paths.bower + "angular/angular.js",
                paths.bower + "angular-animate/angular-animate.js",
                paths.bower + "angular-aria/angular-aria.js",
                paths.bower + "angular-messages/angular-messages.js",
                paths.bower + "angular-material/angular-material.js",
            ]
        },
        {
            name: "angular-material.js",
            paths: [
                paths.bower + "material/src/components/autocomplete/autocomplete.js",
                paths.bower + "material/src/components/backdrop/backdrop.js",
                paths.bower + "material/src/components/bottomSheet/bottomSheet.js",
                paths.bower + "material/src/components/button/button.js",
                paths.bower + "material/src/components/card/card.js",
                paths.bower + "material/src/components/checkbox/checkbox.js",
                paths.bower + "material/src/components/chips/chips.js",
                paths.bower + "material/src/components/content/content.js",
                paths.bower + "material/src/components/datepicker/datepicker.js",
                paths.bower + "material/src/components/dialog/dialog.js",
                paths.bower + "material/src/components/divider/divider.js",
                paths.bower + "material/src/components/fabActions/fabActions.js",
                paths.bower + "material/src/components/fabSpeedDial/fabSpeedDial.js",
                paths.bower + "material/src/components/fabToolbar/fabToolbar.js",
                paths.bower + "material/src/components/fabTrigger/fabTrigger.js",
                paths.bower + "material/src/components/gridList/gridList.js",
                paths.bower + "material/src/components/icon/icon.js",
                paths.bower + "material/src/components/input/input.js",
                paths.bower + "material/src/components/list/list.js",
                paths.bower + "material/src/components/menu/menu.js",
                paths.bower + "material/src/components/menuBar/menuBar.js",
                paths.bower + "material/src/components/progressCircular/progressCircular.js",
                paths.bower + "material/src/components/progressLinear/progressLinear.js",
                paths.bower + "material/src/components/radioButton/radioButton.js",
                paths.bower + "material/src/components/select/select.js",
                paths.bower + "material/src/components/showHide/showHide.js",
                paths.bower + "material/src/components/sidenav/sidenav.js",
                paths.bower + "material/src/components/slider/slider.js",
                paths.bower + "material/src/components/sticky/sticky.js",
                paths.bower + "material/src/components/subheader/subheader.js",
                paths.bower + "material/src/components/swipe/swipe.js",
                paths.bower + "material/src/components/switch/switch.js",
                paths.bower + "material/src/components/tabs/tabs.js",
                paths.bower + "material/src/components/toast/toast.js",
                paths.bower + "material/src/components/toolbar/toolbar.js",
                paths.bower + "material/src/components/tooltip/tooltip.js",
                paths.bower + "material/src/components/virtualRepeat/virtualRepeat.js",
                paths.bower + "material/src/components/whiteframe/whiteframe.js",
            ]
        },
        {
            name: "modernizr.js",
            paths: paths.bower + "modernizr/modernizr.js"
        },
        {
            name: "Site.js",
            paths: [
                paths.scripts + "Site.js"
            ]
        }
    ]
};

var lintSources = {
    css: paths.styles + '**/*.{css}',
    scss: paths.styles + '**/*.{scss}',
    js: [
        paths.scripts + '**/*.js'
    ],
    ts: paths.scripts + '**/*.ts'
};

function sizeBefore(title) {
    return size({
        title: 'Before: ' + title
    });
}
function sizeAfter(title) {
    return size({
        title: 'After: ' + title
    });
}

gulp.task('generate-service-worker', function(callback) {
    var path = require('path');
    var swPrecache = require('sw-precache');
    var rootDir = 'wwwroot';

    swPrecache.write(path.join(rootDir, 'sw.js'), {
        staticFileGlobs: [rootDir + '/**/*.' + extAll, 'bower_components/**/*.' + extAll],
        stripPrefix: rootDir + '/'
    }, callback);
});

gulp.task('requirejs-sw', function (cb) {
    requirejsSw = require('gulp-requirejs-sw');
    debugger;
    return requirejsSw(cb);
});

gulp.task('clean-css', function (cb) {
    return rimraf(paths.css, cb);
});

gulp.task('clean-fonts', function (cb) {
    return rimraf(paths.fonts, cb);
});

gulp.task('clean-js', function (cb) {
    return rimraf(paths.js, cb);
});

gulp.task('clean-cshtml', function (cb) {
    return rimraf(paths.views + '**/*.min.cshtml', cb);
});

gulp.task('clean', ['clean-css', 'clean-fonts', 'clean-js']);

gulp.task('lint-css', function () {
    return merge([
        gulp.src(lintSources.css)
            .pipe(plumber())
            .pipe(csslint())
            .pipe(csslint.reporter()),
        gulp.src(lintSources.scss)
            .pipe(plumber())
            .pipe(scsslint())
    ]);
});

gulp.task("lint-ts", function () {
    return merge([
        gulp.src(paths.scripts + "**/*.ts")
            .pipe(plumber())
            .pipe(tslint())
            .pipe(tslint.report("verbose"))
    ]);
});
gulp.task("lint-jscs", function () {
    return merge([
        gulp.src(paths.scripts + "**/*.js")
            .pipe(plumber())
            .pipe(jscs())
    ]);
});
gulp.task("lint-js", function () {
    return merge([
        gulp.src(paths.scripts + "**/*.js")
            .pipe(plumber())
            .pipe(jshint())
            .pipe(jshint.reporter("default", {
                verbose: true
            }))
    ]);
});

gulp.task('lint', [
    'lint-css',
    'lint-js'
]);

gulp.task('build-css', ['clean-css', 'lint-css'], function () {
    var tasks = sources.css.map(function (source) {
        if (source.copy) {
            return gulp
                .src(source.paths)
                .pipe(rename({
                    basename: source.name,
                    extname: ''
                }))
                .pipe(gulp.dest(paths.css));
        } else {
            return gulp
                .src(source.paths)
                .pipe(plumber())
                .pipe(gulpif(
                    environment.isDevelopment(),
                    sourcemaps.init()))
                .pipe(gulpif('**/*.scss', sass()))
                .pipe(autoprefixer({                
                    browsers: [
                        '> 1%',
                        'last 2 versions'
                    ]
                }))
                .pipe(gulpif(source.concat, concat(source.name)))
                .pipe(sizeBefore(source.name))
                .pipe(gulpif(
                    !environment.isDevelopment(),
                    cssnano()))
                .pipe(sizeAfter(source.name))
                .pipe(gulpif(
                    environment.isDevelopment(),
                    sourcemaps.write('.')))
                .pipe(gulp.dest(paths.css));
        }
    });
    return merge(tasks);
});

gulp.task('build-fonts', ['clean-fonts'], function () {
    var tasks = sources.fonts.map(function (source) {
        return gulp
            .src(source.path)
            .pipe(plumber())
            .pipe(rename(function (path) {
                path.dirname = '';
            }))
            .pipe(gulp.dest(paths.fonts));
    });
    return merge(tasks);
});

gulp.task("build-js", ["compile-ts", "lint-js"]);

gulp.task("compile-ts", [],
function () {
    var tasks = sources.ts.map(function (source) {
        return gulp
            .src(source.paths)
            .pipe(plumber())
            .pipe(gulpif(
                environment.isDevelopment(),
                sourcemaps.init()))
            .pipe(gulpif(
                "**/*.ts",
                typescript(getTypeScriptProject(source))))
            .pipe(gulpif(source.concat, concat(source.name)))
            .pipe(sizeBefore(source.name))
            .pipe(gulpif(
                !environment.isDevelopment(),
                uglify()))
            .pipe(sizeAfter(source.name))
            .pipe(gulpif(
                environment.isDevelopment(),
                sourcemaps.write({ sourceRoot: '/Scripts/' })))
            .pipe(gulp.dest(paths.js));
    });
    return sequence(tasks);
});

gulp.task('build-cshtml', ['clean-cshtml'], function () {
    return gulp
        .src(paths.views + '**/*.cshtml')
        .pipe(minifyCshtml())
        .pipe(rename(function (path) {
            path.extname = '.min.cshtml';
        }))
        .pipe(gulp.dest(paths.views));
});

gulp.task('build', [
    'build-css',
    'build-fonts',
    'build-cshtml',
    'build-js'
]);

gulp.task('test', function () {
    return gulp
        .src(paths.tests + 'mocha.html')
        .pipe(mocha());
});

gulp.task('optimize-images', function () {
    return gulp
        .src(sources.img)
        .pipe(plumber())
        .pipe(sizeBefore())
        .pipe(imagemin({
            multipass: true,
            optimizationLevel: 7
        }))
        .pipe(gulp.dest(paths.img))
        .pipe(sizeAfter());
});

gulp.task('watch-css', function () {
    return gulp
        .watch(
            paths.styles + '**/*.{css,scss}',
            ['build-css'])
        .on('change', function (event) {
            gutil.log(gutil.colors.blue('File ' + event.path + ' was ' + event.type + ', build-css task started.'));
        });
});

gulp.task('watch-js', function () {
    return gulp
        .watch(
            paths.scripts + '**/*.{js,ts}',
            ['build-js'])
        .on('change', function (event) {
            gutil.log(gutil.colors.blue('File ' + event.path + ' was ' + event.type + ', build-js task started.'));
        });
});

gulp.task('watch-html', function () {
    return gulp.watch(paths.partials + '**/*.html')
        .on('change', browserSync.reload);
});

gulp.task('watch-tests', function () {
    return gulp
        .watch([
            paths.scripts + '**/*.{js,ts}',
            paths.tests + '**/*.{js,ts}'
        ],
        ['test'])
        .on('change', function (event) {
            gutil.log(gutil.colors.blue('File ' + event.path + ' was ' + event.type + ', test task started.'));
        });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        notify: true,
        port: 9000, 
        ui: false,
        server: {
            baseDir: ['wwwroot', 'bower_components', '/Scripts'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
});

gulp.task('watch', ['browser-sync', 'watch-css', 'watch-js', 'watch-html']);

function pageSpeed(strategy, cb) {
    if (siteUrl === undefined) {
        return cb('siteUrl is undefined. Google PageSpeed requires a URL to your deployed site.');
    }

    return psi(
        siteUrl,
        {
            nokey: 'true',
            strategy: strategy
        },
        function (err, data) {
            console.log(data.score);
            console.log(data.pageStats);
        });
}

gulp.task('pagespeed-mobile', function (cb) {
    return pageSpeed('mobile', cb);
});

gulp.task('pagespeed-desktop', function (cb) {
    return pageSpeed('desktop', cb);
});

gulp.task(
    'default',
    [
        'build',
        'test',
        'watch'
    ]);
