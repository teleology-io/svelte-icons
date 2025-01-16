import path from 'path'
import fs from 'node:fs';

import { modules } from './manifest.js'
import { glob } from 'glob';
import { svgMap } from './cheerio.js';
import { slim } from '@teleology/slim';

const MODULE_DIR = path.relative(process.cwd(), 'modules')
const OUTPUT_DIR = path.relative(process.cwd(), 'dist')

const TEMPLATE = `<script lang="ts">
import type { SVGAttributes } from "svelte/elements";
  interface Props extends SVGAttributes<any> { title?: string; size?: string }
  let { title: t, size: s = '24px', ...r }: Props = $props();
</script>

<svg {...{{attrs}}} {...r} width={s} height={s}>
{#if t}<title>{t}</title>{/if}
  {{data}}
</svg>`


const EXPORT_TMP = `<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  const ics = {
{{loaders}} 
  } as const

  interface Props extends SVGAttributes<any> {
    title?: string;
    size?: string;
    icon: keyof typeof icons;
  }

  let { icon: i, ...r }: Props = $props();
</script>

{#if i in ics}
  {#await ics[i]() then { default: C }}
    <C {...r} />
  {/await}
{/if}`

const EXPORT_D_S = `import type { SVGAttributes } from "svelte/elements";
declare const Index: import("svelte").Component<SVGAttributes<any> & {
    title?: string;
    size?: string;
    icon: {{names}};
}, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;`

function kebab(v) {
  return v
    .replace(/[^a-zA-Z0-9\s]/g, '-')?.toLowerCase()
}

const defaultFormatter = ({ kebab, parsedFile }) => kebab(parsedFile.name)

for (const module of modules) {
  if (module.type === 'git') {
    const iconDir = path.resolve(MODULE_DIR, module.id)
    const files = glob.sync(iconDir + '/**/*.svg')
    
  

    fs.mkdirSync(path.resolve(OUTPUT_DIR, module.id), { recursive: true })

    const names = []
    const lazy = []

    let i = 0;

    for (const file of files) {
      const formatter = module.formatter || defaultFormatter
      const name = formatter?.({ kebab, parsedFile: path.parse(file) })
      const { data, attrs } = svgMap(file)

      const iconContent = slim(TEMPLATE, {
        attrs: JSON.stringify(attrs), 
        data
      })

      fs.writeFileSync(path.resolve(OUTPUT_DIR, module.id, `${i}.svelte`), iconContent, 'utf8')

      names.push(name);
      lazy.push(`    ["${name}"]: () => import('./${i}.svelte'),`)

      i++
    }

    fs.writeFileSync(path.resolve(OUTPUT_DIR, module.id, `index.svelte`), slim(EXPORT_TMP, {
      loaders: lazy.join('\n')
    }), 'utf8');
    fs.writeFileSync(path.resolve(OUTPUT_DIR, module.id, `index.svelte.d.ts`), slim(EXPORT_D_S, {
      names: names.map((v) => `"${v}"`).join(' | ')
    }), 'utf8');


    fs.writeFileSync(path.resolve(OUTPUT_DIR, module.id, `index.ts`), `export { default as ${module.name} } from './index.svelte'`, 'utf8')

    // for (const file of files) {
    //   const parsedFile = path.parse(file)
    //   console.log({ parsedFile })
    //   const { data, attrs } = svgMap(file)
    //   const snake = kebab(file.replace(iconDir + '/', '').replace(replaceSuffix, '').split('/').reverse().join('-'))
      
      // const output = slim(TEMPLATE, {
      //   attrs: JSON.stringify(attrs), data
      // })
      
      // names.push(snake);

      // lazy.push(`    ["${snake}"]: () => import('./${snake}.svelte'),`)

      // fs.writeFileSync(path.resolve(LIB_DIR, module.id, `${snake}.svelte`), output, 'utf8')
      
    // }

  }
}
