import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

/**
 * generate rollup configuration
 * @typedef {{
 * 	input:import('rollup').RollupOptions,
 * 	output:import('rollup').OutputOptions
 * }} RollupConfig
 * @param {{input:string, fileName:string, name?:string}} config
 * @returns {RollupConfig}
 */
const rollupConfigFactory = config => {
  const { input, fileName, name } = config

  return {
    input:{
      input,
      plugins:[
        babel({exclude:'node_modules/**'}),
        terser()
      ]
    },
    output:{
      file:fileName,
      format:'umd',
      name: name || 'dayjs',
      globals:{
        dayjs:'dayjs'
      },
      compact:true
    }
  }
}

export default rollupConfigFactory
