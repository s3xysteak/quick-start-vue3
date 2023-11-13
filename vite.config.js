import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { createHtmlPlugin } from 'vite-plugin-html'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { viteExternalsPlugin } from 'vite-plugin-externals'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      imports: ['vue']
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          cesiumInjectScript: `<script src="libs/cesium/Cesium.js"></script>`
        }
      }
    }),
    copyCesium(['Assets', 'ThirdParty', 'Widgets', 'Workers']),
    viteExternalsPlugin({ cesium: 'Cesium' }, { disableInServe: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

/**
 * @param {string[]} items - 文件夹名数组
 * @returns {Plugin[]}
 */
function copyCesium(items) {
  return viteStaticCopy({
    targets: [
      ...items.map(item => ({
        src: `node_modules/cesium/Build/Cesium/${item}/*`,
        dest: `libs/cesium/${item}/`
      })),
      {
        src: 'node_modules/cesium/Build/Cesium/Cesium.js',
        dest: 'libs/cesium/'
      }
    ]
  })
}
