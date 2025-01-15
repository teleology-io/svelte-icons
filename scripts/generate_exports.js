import { modules } from './manifest.js'

const base = '.'

const exports = [base, ...modules.map((it) => it.id)].reduce((a, name) => {

  a['./' + name] = {
    "types": `./dist/${name}/index.d.ts`,
    "svelte": `./dist/${name}/index.js`,
    "require": `./dist/${name}/index.js`,
    "import": `./dist/${name}/index.js`,
    "default": `./dist/${name}/index.js`
  }


  return a;
}, {})

console.log(JSON.stringify(exports, null, 2))