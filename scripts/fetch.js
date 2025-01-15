import { execSync } from 'node:child_process'
import path from 'node:path'
import fs from 'node:fs'

import {  modules, getModuleDirectory } from './manifest.js'

const moduleDir = path.relative(process.cwd(), 'modules')

fs.mkdirSync(moduleDir, { recursive: true })

for (const module of modules) {
	if (module.type === 'git') {
		const childDir = getModuleDirectory(module)
		const iconModuleDir = path.resolve(moduleDir, module.id)

		fs.mkdirSync(iconModuleDir, { recursive: true })

		const sparseCommand = module.sparse ? `git sparse-checkout set ${module.sparse} --skip-checks` : ''
		execSync(`cd ${iconModuleDir} ; git clone --depth=1 ${module.url} ; cd ${childDir} ; ${sparseCommand}`)	
	}
}
