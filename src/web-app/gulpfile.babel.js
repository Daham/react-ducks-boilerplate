import { src, dest, series } from 'gulp';
import babel from 'gulp-babel';
import sourceMaps from 'gulp-sourcemaps';


export const buildScripts = () => src('server.js')
    .pipe(babel())
    .pipe(dest('dist'));

export const buildScriptsWithSourceMaps = () => src('server.js')
    .pipe(sourceMaps.init())
    .pipe(babel())
    .pipe(sourceMaps.write("."))
    .pipe(dest('dist'));

// Development Task
export const dev = series(buildScriptsWithSourceMaps);

// Serve Task
export const build = series(buildScripts);

// Default task
export default dev;