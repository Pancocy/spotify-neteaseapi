// vite.config.js
 
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
 
export default defineConfig({
	plugins: [uni()],
	server: {
		proxy: {
			'/api': {
				target: 'http://124.222.215.248:3000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});