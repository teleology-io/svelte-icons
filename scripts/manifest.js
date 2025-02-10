
export function getModuleDirectory(module) {
	const url = new URL(module.url)
	const pathname = url.pathname
	return pathname.slice(pathname.lastIndexOf('/') + 1)
}

export function getModuleIconDirectory(module) {
	const url = new URL(module.url)
	const pathname = url.pathname
	return module.id + '/' + pathname.slice(pathname.lastIndexOf('/') + 1) + '/' + module.sparse
}

export const modules = [
	{
		id: 'ph',
		name: 'Phospor',
		type: 'git',
		url: 'https://github.com/phosphor-icons/homepage',
	},
	{
		id: 'ai',
		name: 'AntDesign',
		type: 'git',
		url: 'https://github.com/ant-design/ant-design-icons',
		sparse: 'packages/icons-svg/svg',
		version: '4.4.2',
	},
	{
		id: 'fa',
		name: 'FontAwesome',
		type: 'git',
		url: 'https://github.com/FortAwesome/Font-Awesome',
		sparse: 'svgs/regular',
		license: 'CC BY 4.0 License',
		version: '6.x'
	},
	{
		id: 'ti',
		name: 'Typicons',
		type: 'git',
		url: 'https://github.com/stephenhutchings/typicons.font',
		sparse: 'src/svg',
	},
	{
		id: 'ta',
		name: 'Tabler',
		type: 'git',
		url: 'https://github.com/tabler/tabler-icons',
		sparse: 'icons',
		license: 'MIT',
		formatter: ({ kebab, parsedFile }) => {
			if (parsedFile.dir.indexOf('outline') !== -1) {
				return kebab(parsedFile.name) + '-outline'
			}
			if (parsedFile.dir.indexOf('filled') !== -1) {
				return kebab(parsedFile.name) + '-filled'
			}

			return parsedFile.name
		},
	},
	{
		id: 'go',
		type: 'git',
		name: 'Octicons',
		url: 'https://github.com/primer/octicons',
		sparse: 'icons',
		pattern: '/**/*-24.svg',
		replace: '-24.svg',
		license: 'MIT',
	},
	{
		id: 'gi',
		type: 'git',
		name: 'GameIcons',
		url: 'https://github.com/delacannon/game-icons-inverted',
		sparse: 'all-icons',
		license: 'CC BY 3.0',
		version: '12920d6565588f0512542a3cb0cdfd36a497f910'
	},
	{
		id: 'di',
		type: 'git',
		name: 'DevIcons',
		url: 'https://github.com/vorillaz/devicons',
		sparse: '!SVG',
		license: 'MIT',
	},
	{
		id: 'vsc',
		type: 'git',
		name: 'VSCode',
		url: 'https://github.com/microsoft/vscode-codicons',
		sparse: 'src/icons',
	},
	{
		id: 'cg',
		type: 'git',
		name: 'CSSGG',
		url: 'https://github.com/astrit/css.gg',
		sparse: 'icons/svg',
		license: 'MIT',
	},
	{
		id: 'bx',
		type: 'git',
		name: 'Boxicons',
		url: 'https://github.com/atisawd/boxicons',
		sparse: 'svg/regular',
	},
	{
		id: 'io',
		type: 'git',
		name: 'Ionicons',
		url: 'https://github.com/ionic-team/ionicons',
		sparse: 'src/svg',
	},
	{
		id: 'wi',
		type: 'git',
		name: 'WeatherIcons',
		url: 'https://github.com/erikflowers/weather-icons',
		sparse: 'svg'
	},
	{
		id: 'bs',
		type: 'git',
		name: 'Bootstrap',
		url: 'https://github.com/twbs/icons',
		sparse: 'icons'
	},
	{
		id: 'fi',
		type: 'git',
		name: 'Feather',
		url: 'https://github.com/feathericons/feather',
		sparse: 'icons'
	},
	{
		id: 'si',
		type: 'git',
		name: 'SimpleIcons',
		url: 'https://github.com/simple-icons/simple-icons',
		sparse: 'icons'
	},
	{
		id: 'hi',
		type: 'git',
		name: 'HeroIcons',
		url: 'https://github.com/tailwindlabs/heroicons',
		sparse: 'src/24',
		formatter: ({ kebab, parsedFile }) => {
			if (parsedFile.dir.indexOf('outline') !== -1) {
				return kebab(parsedFile.name) + '-outline'
			}
			if (parsedFile.dir.indexOf('solid') !== -1) {
				return kebab(parsedFile.name) + '-solid'
			}

			return parsedFile.name
		}
	},
	{
		id: 'co',
		name: 'Circum',
		type: 'git',
		url: 'https://github.com/Klarr-Agency/Circum-Icons',
		sparse: 'svg'
	},
	{
		id: 'lu',
		name: 'Lucide',
		type: 'git',
		url: 'https://github.com/lucide-icons/lucide',
		sparse: 'icons',
		license: 'ISC',
		version: '0.471.1',
	}
]