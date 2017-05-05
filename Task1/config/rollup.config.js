import nodeResolve from 'rollup-plugin-node-resolve';
import convertCJS from 'rollup-plugin-commonjs';


export default{
    entry: 'src/js/app.js',
    external: ['utils', path.resolve('src/js/utils.js')],
    format: 'umd',
    moduleName: 'webForms',
    plugins: [nodeResolve(), convertCJS()],
    dest: 'dist/js/bundle.js'
}