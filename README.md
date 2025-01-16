# @teleology/svelte-icons
A slim wrapper around numerous populare svg icons for Svelte 5.

## Installation
```shell
yarn add @teleology/svelte-icons
```

## Usage
Packs are split into separate paths. Valid icon names should be exposed as a union of known keys. For larger packs this might take some time for your IDE to load and suggest. 

```javascript
import { Feather } from '@teleology/svelte-icons/fi';

<Feather icon="x" stroke="blue"/>
```

## Icon Props
Any prop an svg can take is accepted outside of width and height. 
```typescript
import type { SVGAttributes } from "svelte/elements";
  
interface Props extends SVGAttributes<any> {
  title?: string
  size?: string
  icon: string
}
```

## Packs

| Name   | Path | License | Version | Count |
|--------|--------|--------|---------|---------|
| [AntDesign](https://github.com/ant-design/ant-design-icons) | ai | MIT | 4.4.2 | 832 |
| [Bootstrap](https://github.com/twbs/icons) | bs | MIT | 1.11.3 | 2052 |
| [Boxicons](https://github.com/atisawd/boxicons) | bx | (CC-BY-4.0 OR OFL-1.1 OR MIT) | 2.1.4 | 815 |
| [CSSGG](https://github.com/astrit/css.gg) | cg | MIT | 2.1.4 | 705 |
| [Circum](https://github.com/Klarr-Agency/Circum-Icons) | co | MPL-2.0 license | 1.0.0 | 289 |
| [DevIcons](https://github.com/vorillaz/devicons) | di | MIT | 1.8.0 | 193 |
| [Feather](https://github.com/feathericons/feather) | fi | MIT | 4.29.2 | 288 |
| [FontAwesome](https://github.com/FortAwesome/Font-Awesome) | fa | CC BY 4.0 License | 6.x | 164 |
| [GameIcons](https://github.com/delacannon/game-icons-inverted) | gi | CC BY 3.0 | 12920d6565588f0512542a3cb0cdfd36a497f910 | 4041 |
| [HeroIcons](https://github.com/tailwindlabs/heroicons) | hi | MIT | 2.2.0 | 649 |
| [Ionicons](https://github.com/ionic-team/ionicons) | io | MIT | 7.4.0 | 1357 |
| [Lucide](https://github.com/lucide-icons/lucide) | lu | ISC | 0.471.1 | 1547 |
| [Octicons](https://github.com/primer/octicons) | go | MIT | 19.14.0 | 646 |
| [Phospor](https://github.com/phosphor-icons/homepage) | ph | MIT | 2.1.1 | 9111 |
| [SimpleIcons](https://github.com/simple-icons/simple-icons) | si | CC0-1.0 | 14.2.0 | 3256 |
| [Tabler](https://github.com/tabler/tabler-icons) | ta | MIT | 3.28.1 | 5827 |
| [Typicons](https://github.com/stephenhutchings/typicons.font) | ti | (CC-BY-SA and SIL) | 2.1.2 | 337 |
| [VSCode](https://github.com/microsoft/vscode-codicons) | vsc | CC-BY-4.0 | 0.0.36 | 470 |
| [WeatherIcons](https://github.com/erikflowers/weather-icons) | wi | MIT | 2.0.12 | 220 |