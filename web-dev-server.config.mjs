import { fromRollup } from '@web/dev-server-rollup';
import rollupCommonJs from '@rollup/plugin-commonjs';

const commonJs = fromRollup(rollupCommonJs, {}, {throwOnUnresolvedImport: true});

export default {
  plugins: [
    commonJs({
      include: [
        'common.js'
      ]
    })
  ],
};