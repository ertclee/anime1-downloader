import metablock from 'rollup-plugin-userscript-metablock'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'

export default {
	input: 'src/index.js',
	output: {
		file: 'userscript.js',
		format: 'iife',
		globals: {
			jquery: '$',
			vue: 'Vue',
			sweetalert2: 'Sweetalert2'
		}
	},
	external: ['jquery', 'vue', 'sweetalert2'],
	plugins: [metablock({ file: 'src/meta.json' }), vue({ css: true }), babel()]
}
