import rollupCommonJs from '@rollup/plugin-commonjs';
import rollupResolveJs from '@rollup/plugin-node-resolve';

export default {
    input: 'index.js',
    output: {
        name: 'Demo',
        format: 'es',
        generatedCode: 'es2015',
        dir: 'dist',
        preserveModules: true
        // file: 'dist/index.js'
    },
  plugins: [
    rollupCommonJs({
      include: [
        'common.js'
      ]
    })
  ],
};