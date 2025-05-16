import { type Config } from 'tailwindcss';

const config: Config = {
	content: ['src/**/*.{ts|svelte|html}'],
	theme: {
		extend: {
			colors: {
				background: '#0D0D1B',
				foreground: '#ffffff'
			}
		}
	}
};

export default config;
