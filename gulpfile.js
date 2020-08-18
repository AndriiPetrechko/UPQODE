const {src, dest} = require('gulp'),
    fileinclude = require('gulp-file-include'),
    gulp = require('gulp'),
    browsersync = require("browser-sync").create(),
    del = require("del"),
    scss = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    group_media = require("gulp-group-css-media-queries"),
    ghPages = require('gulp-gh-pages'),
    babel = require('gulp-babel');

const project_folder = "dist";
const source_folder = "#src";

const path={
    build:{
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
        movie: project_folder + "/movie/",
    },
    src:{
        html: source_folder + "/*.html",
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
        movie: source_folder + "/movie/*.mp4",
    },
    watch:{
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/*.{jpg,png,svg,gif,ico,webp}",
    },
    clean:"./" + project_folder + "/"
}

function browserSync(params){
    browsersync.init({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify:false
    })
}

function html(){
    return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css(){
    return src(path.src.css)
    .pipe(
        scss({
            outputStyle: "expanded"
        })
    )
    .pipe(
        group_media()
    )
    .pipe(
        autoprefixer({
            overrideBrowserslist: ["last 5 versions"],
            cascade: true
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js(){
    return src(path.src.js)
    .pipe(fileinclude())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function fonts(){
    return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
    .pipe(browsersync.stream())
}

function images(){
    return src(path.src.img)
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function movie(){
    return src(path.src.movie)
    .pipe(dest(path.build.movie))
    .pipe(browsersync.stream())
}

function watchFiles(params){
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params){
    return del(path.clean);
}

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
      .pipe(ghPages());
  });

let build = gulp.series(clean, gulp.parallel(html, css, js, images, movie, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.movie = movie;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;