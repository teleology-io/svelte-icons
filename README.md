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

| Name   | License | Version | Count |
|--------|--------|---------|---------|
| [AntDesign](https://github.com/ant-design/ant-design-icons) | MIT | 4.4.2 | 831 |
| [Bootstrap](https://github.com/twbs/icons) | MIT | 1.11.3 | 2051 |
| [Boxicons](https://github.com/atisawd/boxicons) | (CC-BY-4.0 OR OFL-1.1 OR MIT) | 2.1.4 | 814 |
| [CSSGG](https://github.com/astrit/css.gg) | MIT | 2.1.4 | 704 |
| [Circum](https://github.com/Klarr-Agency/Circum-Icons) | MPL-2.0 license | 1.0.0 | 288 |
| [DevIcons](https://github.com/vorillaz/devicons) |  | 1.8.0 | 192 |
| [Feather](https://github.com/feathericons/feather) | MIT | 4.29.2 | 287 |
| [FontAwesome](https://github.com/FortAwesome/Font-Awesome) | CC BY 4.0 License | 6.x | 163 |
| [GameIcons](https://github.com/delacannon/game-icons-inverted) | CC BY 3.0 | 12920d6565588f0512542a3cb0cdfd36a497f910 | 4040 |
| [HeroIcons](https://github.com/tailwindlabs/heroicons) | MIT | 2.2.0 | 648 |
| [Ionicons](https://github.com/ionic-team/ionicons) | MIT | 7.4.0 | 1356 |
| [Lucide](https://github.com/lucide-icons/lucide) | ISC | 0.471.1 | 1546 |
| [Octicons](https://github.com/primer/octicons) |  | 19.14.0 | 645 |
| [Phospor](https://github.com/phosphor-icons/homepage) | MIT | 2.1.1 | 9110 |
| [SimpleIcons](https://github.com/simple-icons/simple-icons) | CC0-1.0 | 14.2.0 | 3255 |
| [Tabler](https://github.com/tabler/tabler-icons) |  | 3.28.1 | 5826 |
| [Typicons](https://github.com/stephenhutchings/typicons.font) | (CC-BY-SA and SIL) | 2.1.2 | 336 |
| [VSCode](https://github.com/microsoft/vscode-codicons) | CC-BY-4.0 | 0.0.36 | 469 |
| [WeatherIcons](https://github.com/erikflowers/weather-icons) | MIT | 2.0.12 | 219 |