const { src, dest, watch, series, parallel } = require("gulp");
const babel = require("gulp-babel");
const concat = require('gulp-concat');

const buildBundle = ()=> {
    return src([
        'src/*.js'
    ])

    .pipe(concat('snakeBundle.js'))
    .pipe(babel({
        presets:["@babel/preset-env"]
    }))
    .pipe(dest('.'))
   
}

const buildLibs = ()=>{
    return src([
        'src/libs/*.js'
    ])

    .pipe(concat('libs.js'))
    .pipe(babel({
        presets:["@babel/preset-env"]
    }))
    .pipe(dest('.'))
}

exports.default = series(buildLibs, buildBundle)