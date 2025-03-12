import rollup from 'rollup'
import configFactory from './rollup.config'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { promisify } from 'node:util'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ncp } from 'ncp'

const __dirname = dirname(fileURLToPath(import.meta.url))

const localePath = join(__dirname, './locale')
const pluginsPath = join(__dirname, './plugins')

const removeFileExtension = (filename:string) => filename.replace(/\.[^/.]+$/, '')

async function build(option:{
	input: rollup.RollupOptions,
	output: rollup.OutputOptions
}) {
	const bundle = await rollup.rollup(option.input)
	await bundle.write(option.output)
}

async function listLocaleJson(locales:string[]) {
	const localeArr = []

	await Promise.all(locales.map(async locale => {
		const localeData = await readFile(join(localePath, locale), 'utf-8')
		localeArr.push({
			key:locale.slice(0, -3),
			name:localeData.match(/\/\/\s+(.*)\s+\[/)[1]
		})
	}))

	await writeFile(join(__dirname, './locale.json'), JSON.stringify(localeArr), 'utf-8')
}

!(async () => {
	const locales = await readdir(localePath)

	for(const locale of locales) {
		const fileName = removeFileExtension(locale)
		await build(configFactory({
			input:`./locale/${locale}`,
			fileName:`./dist/locale/${fileName}.js`,
			name:`dayjs_locale_${fileName.replace('-', '_')}`
		}))
	}

	const plugins = await readdir(pluginsPath)

	for(const plugin of plugins) {
		const fileName = removeFileExtension(plugin)
		await build(configFactory({
			input:`./plugins/${plugin}`,
			fileName:`./dist/plugins/${fileName}.js`,
			name:`dayjs_plugin_${fileName.replace('-', '_')}`
		}))
	}

	await build(configFactory({
		input:'./index.ts',
		fileName:'./dist/dayjs.min.js'
	}))

	await promisify(ncp)('./types', './dist')

	await listLocaleJson(locales)

})()
