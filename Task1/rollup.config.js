'use strict';

//import nodeResolve from 'rollup-plugin-node-resolve';
//import convertCJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
//import builtins from 'rollup-plugin-node-builtins';

//console.log(nodeResolve);

export default{
    entry: 'src/js/app.js',
//    external: ['utils', path.resolve('src/js/utils.js')],
    format: 'umd',
//    moduleName: 'Forms',
    plugins: [
//        nodeResolve({
//          jsnext: true,
//          main: true,
//          browser: true,
//    }), 
//    convertCJS(),
//    builtins(),
    babel({
      exclude: 'node_modules/**',
    })],
    external: ['utils'],
    dest: 'dist/js/bundle.js'
};