import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import multiInput from 'rollup-plugin-multi-input'
import { terser } from 'rollup-plugin-terser'

export default {
  input: ['src/**/*.js', 'src/helpers/**/*.js'],
  output: [
    {
      dir: 'bundle-es',
      format: 'es',
      name: 'bundle',
    },
    {
      dir: 'bundle-cjs',
      format: 'cjs',
      exports: 'named',
      name: 'bundle',
    },
  ],
  plugins: [
    multiInput(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    terser(),
  ],
}
