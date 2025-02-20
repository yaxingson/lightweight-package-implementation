import { defineConfig } from 'vitest/config'

export default defineConfig({
	test:{
		globals:true,
		watch:false,
		include:['./lib/**/*.test.ts'],
		coverage:{
			provider:'v8'
		}
	},
})
