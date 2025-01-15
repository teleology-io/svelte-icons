import { execSync } from 'node:child_process'
import path from 'node:path'
import fs from 'node:fs'

import {  modules } from './manifest.js'

const moduleDir = path.relative(process.cwd(), 'modules')
const outputDir = path.relative(process.cwd(), 'dist')

const getDirectory = (module)=> {
  const url = new URL(module.url)
	const pathname = url.pathname
	return pathname.slice(pathname.lastIndexOf('/') + 1)
}

const output = [];

for (const module of modules) {
	if (module.type === 'git') {
		const srcDir = getDirectory(module)
		const iconModuleDir = path.resolve(moduleDir, module.id, srcDir, 'package.json')
    
    const files = fs.readdirSync(path.resolve(outputDir, module.id))
    const link = `[${module.name}](${module.url})`

		try {
      const pk = fs.readFileSync(iconModuleDir, 'utf8')
      const { license, version } = JSON.parse(pk)
      
      output.push(`| ${[link, module.license || license, module.version || version, files.length - 2].join(' | ')} |`)
    } catch (e) {
      console.error(`module ${module.id} failed to load package.json`)
      output.push(`| ${[link, module.license, module.version, files.length - 2].join(' | ')} |`)
    }
	}
}

console.log(output.sort().join('\n'))
