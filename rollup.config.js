import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import {
    uglify
} from 'rollup-plugin-uglify';

export default {
    input: ['src/**/*.js', 'src/helpers/**/*.js'],
    output: {
        file: './build/bundle.min.js',
        format: 'iife',
        name: 'bundle',
    },
    plugins: [
        multiInput(),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        uglify()
    ]
}
