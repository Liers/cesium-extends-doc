import { defineConfig } from 'dumi';
import path from 'path';

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';
const repo = 'cesium-extends-doc';

export default defineConfig({
  themeConfig: {
    name: 'cesium163-extends',
    socialLinks: {
      github: 'https://github.com/Liers/cesium-extends',
    },
    logo: "/logo.svg"
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    cesium: path.resolve(__dirname, 'node_modules/cesium')
  },
  copy: [
    { from: path.join(cesiumSource, cesiumWorkers), to: 'dist/cesium/Workers' },
    { from: path.join(cesiumSource, 'Assets'), to: 'dist/cesium/Assets' },
    { from: path.join(cesiumSource, 'Widgets'), to: 'dist/cesium/Widgets' },
  ],
  define: {
    CESIUM_BASE_URL: '/cesium',
  },
  jsMinifier: 'terser',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
