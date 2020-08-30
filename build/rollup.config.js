import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'VuetifyContentful',
    exports: 'named',
    globals: {
      vue: 'Vue',
      'vuetify/lib': 'Vuetify',
    },
  },
  external: [
    'vue',
    'vuetify/lib',
    'core-js/modules/es.string.split',
    'core-js/modules/es.regexp.exec',
  ],
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    babel({
      exclude: ['node_modules/**'],
      externalHelpers: true,
      plugins:
      [
        ['@babel/plugin-proposal-optional-chaining'],
      ],
      runtimeHelpers: true,
      sourceMaps: true,
    }),
  ],
};
